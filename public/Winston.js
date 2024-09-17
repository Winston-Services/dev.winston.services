const WebSocket = require('ws');
class Winston {
  constructor({ root = '127.0.0.1', address = 'n/a', db }) {
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
    this.server = new WebSocket.Server({ port: 7557 });
    this.rateLimit = new Map();
    this.limit = 1000;
    this.server.on('connection', async (socket) => {
      let baseDb = await this.db.get(root);
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
      socket.send(
        JSON.stringify(
          {
            OP_CODE: 'CONNECT',
            ADDRESS: this.address,
            SIG: 'Add_Sig',
          },
          false,
          2
        )
      );
    });
  }
  error(msg) {
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
    };
  }
  close() {
    console.log('Client Disconnected.');
  }
}
exports.Winston = Winston;
