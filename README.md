# SBC-BTC
<p align="center">
 <a href="https://www.secureblockchains.com/"><img src="https://github.com/SecureBlockChains/Assets/blob/master/Anchor.png" title="SBC" alt="SBC"></a>
</p>

# SBC-ETH

> A Node.js Library for BTC

### Install

```
Insure you have your SSH keys added to yout github account before installing
```

> npm install -S SecureBlockChains/SBC-BTC

### Examples

> Address Creation

```javascript
const BTC = require('sbc-btc')
var newWallet = BTC.util.newWallet()
var oldWallet = BTC.util.importWallet(WIF)
```

> Balance

```javascript
const BTC = require('sbc-btc')

BTC.accountInfo(callback, address)
```

> Payments

```javascript
const BTC = require('sbc-btc')
var tx = ETH.payment(prevTxHash, transactionCount, destination, amount, WIF)
```

> utility

```javascript
const BTC = require('sbc-btc')
var btcAmount = BTC.util.fromSatoshi(100000000)
var satoshi = BTC.util.toSatoshi(1)
```

### Methods

```javascript
const BTC = require('sbc-btc')
BTC.submit(callback, tx)
BTC.accountInfo(callback, address)
BTC.history(callback, address)