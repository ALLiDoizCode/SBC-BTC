const bitcoin = require('bitcoinjs-lib');
const util = require('./Helpers/Utility');

function payment(prevTxHash, transactionCount, destination, amount, WIF) {
    let txb = new bitcoin.TransactionBuilder()
    let hash = prevTxHash
    let ountn = transactionCount;

    //input
    txb.addInput(hash, ountn)

    //output
    txb.addOutput(destination, util.toSatoshi(amount))

    let keyPair = bitcoin.ECPair.fromWIF(WIF)

    txb.sign(0, keyPair)

    let tx = txb.build().toHex()

    return tx

}