const util = require('./Utility');
const tranaction = require('./Transaction');
const client = require('./Client');

var exports = module.exports = {};

exports.submit = function (callback, blob) {
    client.send(callback, client.router.submit, blob)
}

exports.accountInfo = function (callback, address) {
    client.send(callback, client.router.accountInfo, address)
}

exports.history = function (callback, address) {
    var router = client.router.history
    router.endpoint = router.endpoint(address)
    client.send(callback, router, "")
}

exports.util = util
exports.tranaction = tranaction