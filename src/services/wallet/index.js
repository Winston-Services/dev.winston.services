var NodeRSA = require("node-rsa");
var qrCode = require("qrcode-npm");
const HEADER_BANNER = "-----BEGIN PUBLIC KEY-----";
const FOOTER_BANNER = "-----END PUBLIC KEY-----";
export default class Wallet {
  constructor() {
    this.key = new NodeRSA();
    return this;
  }

  generateKeyPair() {
    this.key.generateKeyPair(512);
    this.walletPrivateKey = this.key.exportKey("pkcs8-private-pem");
    this.walletPublicKey = (() => {
      const a = this.key.exportKey("pkcs8-public-pem").split("\n");
      a.shift();
      return { a: a.shift(), b: a.shift() };
    })();
    return this;
  }

  setPublicKey(key) {
    const key_1 = new NodeRSA();
    key_1.importKey(
      [HEADER_BANNER, key.a, key.b, FOOTER_BANNER].join("\n"),
      "pkcs8-public-pem"
    );
    if (key_1.isPublic()) {
      this.key = key_1;
      this.walletPublicKey = (() => {
        const a = key_1.exportKey("pkcs8-public-pem").split("\n");
        a.shift();
        return { a: a.shift(), b: a.shift() };
      })();
    }
    return this;
  }

  setPrivateKey(key) {
    const key_2 = new NodeRSA();
    key_2.importKey(key, "pkcs8-private-pem");
    if (key_2.isPrivate()) {
      this.key = key_2;
      this.walletPrivateKey = key_2.exportKey("pkcs8-private-pem");
      this.walletPublicKey = (() => {
        const a = key_2.exportKey("pkcs8-public-pem").split("\n");
        a.shift();
        return { a: a.shift(), b: a.shift() };
      })();
    }
    return this.key.isPrivate();
  }

  verifySignature(data) {
    this.setPublicKey(data.sender);
    const trx = {
      sender: data.sender,
      amount: data.amount,
      receiver: data.receiver,
      data: [{ message: data.data[0].message }],
      timestamp: data.timestamp,
      txPreviousHash: data.txPreviousHash,
    };
    console.log(trx);
    return this.key.verify(trx, new Buffer(data.signature));
  }

  signTransaction(
    amount,
    receiver,
    txPreviousHash,
    message = "A message from me to you!",
    stake = []
  ) {
    const trx = {
      sender: this.walletPublicKey,
      amount,
      receiver,
      data: [{ message }],
      timestamp: Date.now(),
      txPreviousHash,
    };
    trx.signature = this.key.sign(trx);
    return trx;
  }

  getQRImage() {
    var qr = qrCode.qrcode(8, "M");
    let keyCode = [this.walletPublicKey.a, this.walletPublicKey.b].join("\n");
    qr.addData(keyCode);
    qr.make();
    return qr.createImgTag(2);
  }
}
