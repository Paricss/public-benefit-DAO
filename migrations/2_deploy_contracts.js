const ICO = artifacts.require("ICO.sol");

module.exports = function(deployer) {
  deployer.deploy(ICO, 'My Token', 'TKN', 100000);
};
