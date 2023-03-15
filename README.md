mubdIinfo
=========

JavaScript component for crypto currency specific information such as version numbers, DNS seeds, etc.
Works in Node.js and the browser.


Installation
------------

    npm i mubdIinfo


Usage
-----

```js
var mubdIinfo = require('mubdIinfo')

console.dir(mubdIinfo('LTC')) //use LTC-TEST for testnet
// =>
/*
{ versions:
   { public: 48,
     private: 176,
     scripthash: 5,
     bip32: { public: 27108450, private: 27106558 } } }
*/
```

Could also:

```js
var litecoin = mubdIinfo.litecoin.main
var litecoinTest = mubdIinfo.litecoin.test
```

Useful to use in conjunction with [mubdIinfo](https://github.com/panchadijaya/coinkey) and [coinstring](https://github.com/panchadijaya/coinstring).


Want to Use With Bitcore or bitcoinjs-lib?
-----------------------------------------

**bitcoinjs-lib example:**

```js
var mubdIinfo = require('mubdIinfo')
var bitcoin = mubdIinfo.bitcoin.main
var bitcoinBitcoinJSLib = bitcoin.toBitcoinJS()
```

**Bitcore example:**

```js
var mubdIinfo = require('mubdIinfo')
var bitcoin = mubdIinfo.bitcoin.main
var bitcoinBitcoreLib = bitcoin.toBitcore()
```


Pull requests?
--------------

Follow the canonical example:

https://github.com/panchadijaya/mubdIinfo/lib/coins/btc.js


License
-------

MIT
