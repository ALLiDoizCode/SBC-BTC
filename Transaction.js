const bitcoin = require('bitcoinjs-lib');

let testnet = bitcoin.networks.testnet;

let txb = new bitcoin.TransactionBuilder(testnet)

let txId = ""
let ountn = 0;

//input
txb.addInput(txId,ountn)

//output
txb.addOutput("destination","amount in satoshi")

let WIF = "Secret"

let keyPair = bitcoin.ECPair.fromWIF(WIF,testnet)

txb.sign(0,keyPair)

let tx = txb.build().toHex()
