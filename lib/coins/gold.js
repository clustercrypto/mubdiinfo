/*
  info from:
    https://github.com/PT-NUR1TECH-INDONESIA/GoldCore/blob/main/core/src/chainparams.cpp
*/

var common = {
  name: 'Gold',
  unit: 'GOLD'
}

var main = Object.assign({}, {
  hashGenesisBlock: '0xf115ea61f4b1c6dd5071634ee64f0590bf31a902e8b01e2d0f7a26d5311ee756',
  // nDefaultPort
  port: 41031,
  portRpc: 41131,
  protocol: {
    magic: 0x020a707c // careful, sent over wire as little endian
  },
  // vSeeds
  seedsDns: [
     'dnsseed.goldcoin.org',
     '203.194.112.133:41031',
     '203.175.11.100:41031',
     '192.168.0.128:41031',
     '36.88.159.178:41031',
     '203.175.11.150:41031',
     '203.194.113.112:41031'
  ],
  // base58Prefixes
  versions: {
    bip32: {
      private: 0x0206185f,
      public: 0x024970ca
    },
    bip44: 0,
    private: 0x66,
    public: 0x61,
    scripthash: 0x30
  }
}, common)

//var test = Object.assign({}, {
//  hashGenesisBlock: '00000bafbc94add76cb75e2ec92894837288a481e5c005f6563d91623bf8bc2c',
//  port: 19999,
//  portRpc: 19998,
//  seedsDns: [
//    'goldcoin.io',
//    'testnet-seed.goldcoin.io',
//    'masternode.io',
//    'test.dnsseed.masternode.io'
//  ],
//  versions: {
//    bip32: {
//      private: 0x04358394,
//      public: 0x043587cf
//    },
//    bip44: 1,
//    private: 0xef,
//    public: 0x8c,
//    scripthash: 0x13
//  }
//}, common)

module.exports = {
  main
//  test
}
