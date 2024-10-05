const WebSocket = require('ws');

class Winston {
  constructor({ root = 'localhost', address = 'n/a', db }) {
    this.db = db;
    this.root = root;
    this.address = address;
    this.ipban = {
      list: [],
      ban: async (_) => {
        await db.put(
          root,
          JSON.stringify(
            {
              root,
              address,
              list: [...this.ipban.list, _],
            },
            false,
            2
          )
        );
      },
      // eslint-disable-next-line no-unused-vars
      unban: async (_) => {
        await db.put(
          root,
          JSON.stringify(
            {
              root,
              address,
              list: [],
            },
            false,
            2
          )
        );
      },
    };
    this.server = new WebSocket.Server({ port: 8558 });
    this.clientRelay = new WebSocket('https://ws.winston.services:7557/ws');
    this.clientRelaySocketId = null;
    this.rateLimit = new Map();
    this.limit = 1000;
    this.server.on('connection', async (socket) => {
      // eslint-disable-next-line no-unused-vars
      let baseDb = await this.db.get(root).catch(_error => false);
      if (!baseDb) {
        await db.put(
          root,
          JSON.stringify(
            {
              root,
              address,
              list: [],
            },
            false,
            2
          )
        );
      } else {
        let data = JSON.parse(baseDb, false, 2);
        this.ipban.list = data.list;
      }
      socket.on('open', () => {
        console.log('Connection Opened.');
      });
      socket.on('message', this.message(socket));
      socket.on('close', this.close);
      socket.on('error', this.error);

      //create the signature.
      socket.send(
        JSON.stringify(
          {
            OP_CODE: 'CONNECT',
            ADDRESS: this.address,
            SIG: 'Add_Sig',
            data: ''
          },
          false,
          2
        )
      );
    });
    this.clientRelay.on('open', () => {
      this.clientRelaySocketId = Math.random().toString(36).substring(2, 15);
      this.server.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({
            OP_CODE: 'CLIENT_RELAY_ID',
            clientRelaySocketId: this.clientRelaySocketId,
          }, false, 2));
        }
      });
      console.log('Client Relay Connection Opened.');
    });
    this.clientRelay.on('message', (message) => {
      this.server.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(message);
        }
      });
      console.log(message.toString());
    });
    this.clientRelay.on('close', this.close);
    this.clientRelay.on('error', this.error);
  }
  error(msg) {
    console.log('Error in Winston.js');
    console.error(msg);
  }
  message(socket) {
    const ip = socket._socket.remoteAddress;
    if (this.ipban.list.includes(ip)) {
      // console.log(`IP ${ip} is banned.`);
      socket.close();
      return;
    }
    const currentTime = Date.now();
    if (this.rateLimit.has(ip)) {
      const { lastMessageTime, messageCount } = this.rateLimit.get(ip);
      if (currentTime - lastMessageTime < this.limit) {
        // 1 second rate limit
        if (messageCount >= 5) {
          // Max 5 messages per second
          // console.log(`Rate limit exceeded for IP ${ip}`);
          if (messageCount >= 15) {
            // Auto ban after 15 attempts
            this.ipban.list.push(ip);
            // console.log(`IP ${ip} has been banned.`);
          }
          socket.close();
          return;
        }
        this.rateLimit.set(ip, {
          lastMessageTime,
          messageCount: messageCount + 1,
        });
      } else {
        this.rateLimit.set(ip, {
          lastMessageTime: currentTime,
          messageCount: 1,
        });
      }
    } else {
      this.rateLimit.set(ip, { lastMessageTime: currentTime, messageCount: 1 });
    }

    return (message) => {
      this.server.clients.forEach((client) => {
        if (client !== socket && client.readyState === WebSocket.OPEN) {
          client.send(message);
        }
      });
      this.clientRelay.send(message);
    };
  }
  close() {
    console.log('Client Disconnected.');
  }
}
exports.Winston = Winston;
