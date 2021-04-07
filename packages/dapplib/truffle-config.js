require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process only venture stomach rival ridge coast gesture opera army gesture'; 
let testAccounts = [
"0xf75dcf11b5be84de817f0ca8c3d069747235a2ef591137ad4f459336a69fd437",
"0x8625b88c128fa10724cfeeb6735d5d12d1af101cd789f20b1496c3d85c2a9376",
"0x51f74cee7b819fd0ab1632ab026019ecbc44f2b263b90faeb5ba8738135d3d0a",
"0xcd551b838007f0bb4f17a5e592ac26de47b1d39cf00d0c05bd60227ebe3fc518",
"0xda3308e930cb663650b3d94dc34ce1906d4b3dce1c0c156427b69a93f08cd237",
"0xf285815893533775a81f2997db529870818015313f288a246adef3b8dfa90b11",
"0xc41871e366d0da1eb3c765e37a091f730f84a957abfde7396ae5c1e66fc885c8",
"0x0a1fffa8a72039cfef0c1a278296c174fb83d135ab8728f002fb910effba132a",
"0xe1fd612dcefd96f9ec2ca09a4185a7fc27bb708df2ada99c21c86e4f40e2970a",
"0x540e4ccd2b5aa259e1d9a7eb88285c259fa5f7d5043dc6f2c9ea02df3f6fa6c1"
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
            version: '^0.5.11'
        }
    }
};
