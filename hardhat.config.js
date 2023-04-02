// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   paths: {
//     artifacts: "./src/artifacts",
//   },
//   solidity: "0.8.0",
// };



require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  defaultNetwork: "mumbai",
  paths: {
        artifacts: "./src/artifacts",
    },
  networks: {
    hardhat: {  
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  },
  
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
}
