const ICO = artifacts.require("ICO.sol");
const RockPaperScissors = artifacts.require("RockPaperScissors.sol");

module.exports = function(deployer) {
  deployer.deploy(ICO, 'Better', 'Better', 10000);
  deployer.deploy(RockPaperScissors);
};
