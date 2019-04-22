const bitcoin = require('bitcoinjs-lib');

var exports = module.exports = {};

let testnet = bitcoin.networks.testnet;


function newWallet() {
    let keyPair = bitcoin.ECPair.makeRandom();
    const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey})
    let private = keyPair.toWIF();

    return {
        "address":address,
        "secret":private
    }
}

function importWallet(WIF) {
    const keyPair = bitcoin.ECPair.fromWIF(WIF)
    const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey })

    return {
        "address":address,
        "secret":WIF
    }
}

/*
muztqAHbAKmtQn9GN8jyGH7tfNhyhpwjRt
cW9uhjpPFzDtsC1aEmMQ53gS9Tvcmi4q5PfhJ1726vpfuENiqi5J 
*/

/*
mvBjUW7JBoTQTpecSt491P6q3Q8JhgrLTJ
cRjtqDWKqjXjqjy3WxNn5WUqk9nDDqMhLTTAp6F5NHopmWHL395e
*/


var toSatoshi = function(value) {
    return parseInt(value * 100000000)
}

var fromSatoshi = function(value) {
    return parseFloat(value) / 100000000
}

exports.toSatoshi = toSatoshi
exports.fromSatoshi = fromSatoshi