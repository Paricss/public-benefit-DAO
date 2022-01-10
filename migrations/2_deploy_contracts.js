// const ICO = artifacts.require("ICO.sol");
// const RockPaperScissors = artifacts.require("RockPaperScissors.sol");
// const Vote = artifacts.require("Vote.sol");
const NFTCollection  = artifacts.require("NFTCollection.sol");

module.exports = function(deployer) {
  // deployer.deploy(ICO, 'Better', 'Better', 10000);
  // deployer.deploy(RockPaperScissors);
  // deployer.deploy(Vote);

  deployer.deploy(NFTCollection,"NFTTest","NFTTest","https://ipfs.io/ipfs/QmSeMaCMfnZyoYgJ6ws132oppLxSPfG7d4t4kw6RmKKkn3/");
  console.log("Success!");
};
