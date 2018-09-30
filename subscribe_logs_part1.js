const Web3 = require("web3");
const ws = "wss://mainnet.infura.io/ws";
const web3 = new Web3(ws);

// web3.eth.subscribe(`logs`, {}, (error, log) => {
//   if (!error) {
//     console.log(log);
//   }
// });

// https://www.cryptokitties.co/ is an online cat game,
// cryptokitties mines www.ethereum.io
// filter out everything that happened with CryptoKitties

web3.eth.subscribe(
  `logs`,
  { address: `0x06012c8cf97BEaD5deAe237070F9587f8E7A266d` },
  (error, log) => {
    if ((!error, log)) {
      console.log(log);
    }
  }
);

// { address: '0x12480E24eb5bec1a9D4369CaB6a80caD3c0A377A',
//   topics:
//    [ '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
//      '0x000000000000000000000000d551234ae421e3bcba99a0da6d736074f22192ff',
//      '0x0000000000000000000000001fd70b8f38ec1b4efd33b07a522aeac91a9e3215' ],
//   data: '0x00000000000000000000000000000000000000000000000000000000000049b6',
//   blockNumber: 6429045,
//   transactionHash: '0x751d90d6d8415ff087fa009e8f6313946258a0e1f8c8f7072c67d15c888367f5',
//   transactionIndex: 72,
//   blockHash: '0x03edb2bf0bfab8d2055ca053d1d1ff52651c1accea37795f0fa164ab77e82c77',
//   logIndex: 118,
//   removed: false,
//   id: 'log_a1308417' }
