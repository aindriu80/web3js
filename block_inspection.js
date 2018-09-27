let Web3 = require("web3");
let url = "https://mainnet.infura.io/v3/c24a049408704fd68fcefd988ad3e041";
let web3 = new Web3(url);

web3.eth.getBlockNumber().then(result => {
  console.log(result);
});

web3.eth.getBlock(6410884).then(block => {
  console.log(block);
});

web3.eth.getBlockNumber().then(result => {
  for (let i = 0; i < 100; i++) {
    web3.eth.getBlock(result - i).then(block => {
      console.log(block.number);
    });
  }
});

web3.eth.getBlock("latest").then(block => {
  console.log(block);
});

web3.eth.getBlock("pending").then(block => {
  console.log(block.number);
});

web3.eth
  .getBlock(
    "0x84626af563bcbde95a75742db71157f17b10b7f86351f118e020dd43919fd593"
  )
  .then(block => {
    console.log(block.number);
  });

web3.eth.getTransactionFromBlock(6410929, 2).then(console.log);
