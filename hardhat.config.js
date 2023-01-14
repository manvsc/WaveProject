require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {
    },
    goerli: {
      url: process.env.INFURA_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
};