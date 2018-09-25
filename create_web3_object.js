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

let address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";

web3.eth.getBalance(address, function(error, balance) {
  if (!error) {
    console.log(web3.utils.frombWei(balance, "either"));
  } else {
    console.log(error);
  }
});
