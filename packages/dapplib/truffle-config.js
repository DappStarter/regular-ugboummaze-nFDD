require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clinic tail sugar blame birth stereo unable hunt problem forget seed'; 
let testAccounts = [
"0xe8275a4bd2be633e61066cc07748572d466add1278552ba2b1072c7283910460",
"0x895e896d21d0f69769f6c4caa59892eb403ad2ed204ba196aa625abc487616ad",
"0xb262865f257c269338504a6c3b8868e28e80905ed569b7849695165198f00ce6",
"0x1926124b9d8ae875433d8897f4cccc67e4cf3d85032c05701e4bfbe7711427c8",
"0x4e52957c63cbe2ed8993793f4291d44e73db06298175a0ba76a5b4a197d3ffba",
"0x4a9413128f7d288ff864c35fb51580176a154bcb53471e6f1054ea56bdd938fe",
"0x5e1b35ef39dede7c1642eb78391dce5f960ba563c6423ff0e742a0549dcdf32c",
"0x3e027703c3d8096140543cdf7260229793cd599802aba806af2853f067b7c5fc",
"0xc18fb727043e96bd5d707a6fd5c75f514318aa990b9f5b7a9726ce8359d0be64",
"0x2995254a21004a04c3634c5c5efb0c2ef1206e4e876a45bb9718aa42cec9d801"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

