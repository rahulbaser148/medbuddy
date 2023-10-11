require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.17',
  networks: {
    polygonmumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/1RmMiJ-7HljmMLgV9eseAEqjlnfP55ra',
      accounts: ['58251640da45033a64c4daa8585f20a3eba31319a0786506bcb2dd3992c15ffd'],
    },
  },
};


// require("@nomicfoundation/hardhat-toolbox");
// require('dotenv').config();

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.17",
//   networks: {
//     goerli: {
//       url: "https://goerli.etherscan.io/",
//       chainId: 5,
//       accounts:['58251640da45033a64c4daa8585f20a3eba31319a0786506bcb2dd3992c15ffd']
//     },
//   },
// };

// sphnix: {
//   url: "https://sphinx.shardeum.org/",
//   chainId: 8082,
//   accounts:['58251640da45033a64c4daa8585f20a3eba31319a0786506bcb2dd3992c15ffd']
// },

// npx hardhat run ./scripts/deploy.js --network goerli  