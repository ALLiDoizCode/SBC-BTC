const bitcoin = require('bitcoinjs-lib');

let testnet = bitcoin.networks.testnet;

let keyPair = bitcoin.ECPair.makeRandom({ network: testnet});
const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey, network: testnet })

let private = keyPair.toWIF();
console.log(address)
console.log(private)
