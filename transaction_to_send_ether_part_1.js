const Tx = require("ethereumjs-tx");

const Web3 = require("web3");
const ws = "https://ropsten.infura.io/v3/c24a049408704fd68fcefd988ad3e041";
var web3 = new Web3(ws);

console.log(web3.eth.accounts.create());
console.log(web3.eth.accounts.create());

// $ node transaction_to_send_ether_part_1.js
// { address: '0x450B13270cca690cCd921bCBfe6e0737d7f589Ce',
//   privateKey: '0xdf20b415c81752f4758b5d5516d2fb1f022e423a583902f2cadeb047ee71c5f2',
//   signTransaction: [Function: signTransaction],
//   sign: [Function: sign],
//   encrypt: [Function: encrypt] }
// { address: '0x2d8A35e53e26492832a13cF4788A7B18A1913Aa7',
//   privateKey: '0xaafcc2d8587e23b2597c8601157ec13bb5c386cacf5506223f748ea3d5493ec5',
//   signTransaction: [Function: signTransaction],
//   sign: [Function: sign],
//   encrypt: [Function: encrypt] }

const account1 = "0x5f3459cAf34e35E9A52117a442Aad55A6e2eb187";
const privateKey1 = Buffer.from(
  "a27b4f867b530627986b81e124e53922369521732d65d71c6c33414399d13691",
  "hex"
);
const account2 = "0x25e20af4D202CfE4EA483EE4Bd87ED42420fFdC0";

web3.eth.getBalance(account1, (error, balance) => {
  console.log("account 1 balance ", balance);
});

web3.eth.getBalance(account2, (error, balance) => {
  console.log("account 2 balance ", balance);
});
