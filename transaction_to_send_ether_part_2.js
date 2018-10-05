const Tx = require("ethereumjs-tx");
const Web3 = require("web3");
const url = "https://ropsten.infura.io/v3/abbe691d210c470bbb9e2956e2f82c49";
const web3 = new Web3(url);

const account1 = "0x5f3459cAf34e35E9A52117a442Aad55A6e2eb187";
const privateKey1 = Buffer.from(
  "a27b4f867b530627986b81e124e53922369521732d65d71c6c33414399d13691",
  "hex"
);
const account2 = "0x25e20af4D202CfE4EA483EE4Bd87ED42420fFdC0";

// build a transaction object

// sign transcation with private key of sender

// serialize the transaction

// broadcast transaction to the network
