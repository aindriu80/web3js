const Web3 = require("web3");
const ws = "wss://mainnet.infura.io/ws";
const web3 = new Web3(ws);

web3.eth.subscribe("pendingTransactions", (error, txhash) => {
  console.log(txhash);
});
