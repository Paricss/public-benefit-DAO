// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;


contract Vote {
  mapping(address => bool) public hasVoted;
  mapping(uint => uint) voteAmount;

  address public admin;

  constructor(){
    admin = msg.sender;
    voteAmount[0] = 0;
    voteAmount[1] = 0;
  }

  function vote(uint voteNum ) external{
    if(!hasVoted[msg.sender]){
      voteAmount[voteNum]++;
      hasVoted[msg.sender] = true;
    }
  }

  function getNum(uint voteIndex) external view returns(uint){
    return voteAmount[voteIndex];
  }


  modifier onlyAdmin() {
    require(msg.sender == admin, 'only admin');
    _;
  }
}