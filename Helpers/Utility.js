const bitcoin = require('bitcoinjs-lib');

var exports = module.exports = {};

var newWallet = function() {
    let keyPair = bitcoin.ECPair.makeRandom();
    const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey})
    let private = keyPair.toWIF();

    return {
        "address":address,
        "secret":private
    }
}

var importWallet = function(WIF) {
    const keyPair = bitcoin.ECPair.fromWIF(WIF)
    const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey })

    return {
        "address":address,
        "secret":WIF
    }
}


var toSatoshi = function(value) {
    return parseInt(value * 100000000)
}

var fromSatoshi = function(value) {
    return parseFloat(value) / 100000000
}

exports.toSatoshi = toSatoshi
exports.fromSatoshi = fromSatoshi
exports.newWallet = newWallet
exports.importWallet = importWallet