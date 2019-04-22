const bitcore = require('bitcore-lib');
const Insight = require('bitcore-insight').Insight;
let insight = new Insight('testnet');


function walletFromRandom() {
    const privateKey = new bitcore.PrivateKey();
    const myAddress = privateKey.toAddress();

    return {
        "address": myAddress,
        "secret": privateKey
    }
}

function walletFromSHA256(phrase) {
    let value = Buffer.from(phrase);
    let hash = bitcore.crypto.Hash.sha256(value);
    let bn = bitcore.crypto.BN.fromBuffer(hash);
    const privateKey = new bitcore.PrivateKey(bn);
    const myAddress = privateKey.toAddress();

    return {
        "address": myAddress,
        "secret": privateKey
    }
}

function walletFromWIF(wif) {
    const privateKey = new bitcore.PrivateKey(wif);
    const myAddress = privateKey.toAddress();

    return {
        "address": myAddress,
        "secret": privateKey
    }
}
