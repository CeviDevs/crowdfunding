require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "hardhat",
  hardhat: {
    chainId: 1337,
  },
  goerli: {
    url: process.env.STAGING_ALCHEMY_KEY,
    accounts: [ process.env.PRIVATE_KEY || "",]
  }
};
