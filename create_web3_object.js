let Web3 = require("web3");

// ganache local blockchain
let url_ganache = "http://127.0.0.1:1745";

// infura
let url_infura =
  "https://mainnet.infura.io/v3/c24a049408704fd68fcefd988ad3e041";

// using geth
let url_geth = "http://127.0.0.1:1745";
let web3 = new Web3(url_infura);

console.log(web3);
