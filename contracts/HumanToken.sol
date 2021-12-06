// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract HumanToken is ERC20, Ownable {
  constructor(string memory _name,string memory _symbol,uint256 _totalSupply) ERC20(_name, _symbol) {
    // _mint(msg.sender, 1 * 10 ** decimals());
    _mint(msg.sender, _totalSupply*10**18);
  }

  // function mint(address to, uint256 amount) public onlyOwner {
  //     _mint(to, amount);
  // }

}
