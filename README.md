mubdiinfo
=========

JavaScript component for crypto currency specific information such as version numbers, DNS seeds, etc.
Works in Node.js and the browser.


Installation
------------

$ git clone https://github.com/clustercrypto/mubdiinfo.git

$ cd mubdiinfo

$ npm install

$ npm i mubdiinfo


Usage
-----

```js
var mubdiinfo = require('mubdiinfo')

console.dir(mubdiinfo('LTC')) //use LTC-TEST for testnet
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
var litecoin = mubdiinfo.litecoin.main  // for mainnet
var litecoinTest = mubdiinfo.litecoin.test  // for testnet
```

Useful to use in conjunction with :
[mubdiinfo](https://github.com/clustercrypto/mubdiinfo)
[eckey](https://github.com/clustercrypto/eckey)
[coinkey](https://github.com/clustercrypto/coinkey)
[coinstring](https://github.com/clustercrypto/coinstring).

Want to Use With Bitcore or bitcoinjs-lib?
-----------------------------------------

**bitcoinjs-lib example:**

```js
var mubdiinfo = require('mubdiinfo')
var bitcoin = mubdiinfo.bitcoin.main
var bitcoinBitcoinJSLib = bitcoin.toBitcoinJS()
```

**Bitcore example:**

```js
var mubdiinfo = require('mubdiinfo')
var bitcoin = mubdiinfo.bitcoin.main
var bitcoinBitcoreLib = bitcoin.toBitcore()
```


Pull requests?
--------------

Follow the canonical example:

   https://github.com/clustercrypto/mubdIinfo/lib/coins/btc.js

   https://github.com/clustercrypto/mubdIinfo/lib/coins/ltc.js
   
   https://github.com/clustercrypto/mubdIinfo/lib/coins/doge.js
   
   https://github.com/clustercrypto/mubdIinfo/lib/coins/gold.js


License
-------

MIT
