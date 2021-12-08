// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface HumanToken{
  function transfer(address to, uint tokens) external returns (bool success);
  function transferFrom(address from, address to, uint tokens) external returns (bool success);
  function balanceOf(address tokenOwner) external view returns (uint balance);
  function approve(address spender, uint tokens) external returns (bool success);
  function allowance(address tokenOwner, address spender) external view returns (uint remaining);
  function totalSupply() external view returns (uint);

  event Transfer(address indexed from, address indexed to, uint tokens);
  event Approval(address indexed tokenOwner, address indexed spender, uint tokens);

}

contract RockPaperScissors {

  // 2 players in the game and each of them make a choice
  address payable private player1;
  address payable private player2;
  string private choiceofPlayer1;
  string private choiceofPlayer2;
  bool private hasPlayer1MadeChoice;
  bool private hasPlayer2MadeChoice;

  address private tokenAddress;


  //when a player join the game, he has to pay fee;
  uint256 public stake;

  mapping(string => mapping(string => uint256)) private winner;

  constructor()  {
    winner['Rock']['Rock'] = 1;
    winner['Rock']['Paper'] = 3;
    winner['Rock']['Scissor'] = 2;
    winner['Paper']['Paper'] = 1;
    winner['Paper']['Scissor'] = 3;
    winner['Paper']['Rock'] = 2;
    winner['Scissor']['Scissor'] = 1;
    winner['Scissor']['Rock'] = 3;
    winner['Scissor']['Paper'] = 2;

    stake = 0.01 ether;
  }

  function setTokenAddress(address _tokenAddress) external{
    tokenAddress= address(_tokenAddress);
  }

  function getTokenAddress() view external returns(address){
    return tokenAddress;
  }

  function transferToken(address sender, address recipient) external{
    HumanToken token = HumanToken(tokenAddress);
    token.transferFrom(sender,recipient,10**19);
  }

  function transferToWinner() external{
    HumanToken token = HumanToken(tokenAddress);
    player2 = payable(0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2);
    token.transfer(player2,10);
  }

  function approveToken() external payable{
    HumanToken token = HumanToken(tokenAddress);
    token.approve(address(this),10**23);
  }

  function join() external payable{
    //Determine whether there is a free space
    if(player1 == address(0)){
      player1 = payable(msg.sender);
      stake = msg.value;
    }else{
      player2 = payable(msg.sender);
    }
    HumanToken token = HumanToken(tokenAddress);
    token.transferFrom(msg.sender,address(this),10**19);
  }



  //value from external should be stored in calldata
  function makeChoice(string calldata _playerChoice) external {
    if(msg.sender == player1 && !hasPlayer1MadeChoice){
      choiceofPlayer1 = _playerChoice;
      hasPlayer1MadeChoice = true;
    }else if(msg.sender == player2 && !hasPlayer2MadeChoice){
      choiceofPlayer2 = _playerChoice;
      hasPlayer2MadeChoice = true;
    }

  }

  //show the choice of player
  function showChoice() public view returns(string memory) {
    return  choiceofPlayer1;
  }

  //show the result of game
  function showResult() external view returns(uint256){
    return winner[choiceofPlayer1][choiceofPlayer2];
  }

  //finish the game
  function finishGame() external payable{
    uint256 result = winner[choiceofPlayer1][choiceofPlayer2];
    if(result == 1){
      HumanToken token = HumanToken(tokenAddress);
      token.transfer(player1,10**19);
      token.transfer(player2,10**19);
    }else if(result == 2){
      //   player1.transfer(address(this).balance);
      HumanToken token = HumanToken(tokenAddress);
      token.transfer(player1,19*10**18);
    }else if(result == 3){
      //   player2.transfer(address(this).balance);
      HumanToken token = HumanToken(tokenAddress);
      token.transfer(player2,19*10**18);
    }

    //restart the game
    player1 = payable(address(0));
    player2 = payable(address(0));

    choiceofPlayer1 = "";
    choiceofPlayer2 = "";

    hasPlayer1MadeChoice = false;
    hasPlayer2MadeChoice = false;

    stake = 0.1 ether;

  }


  //test
  function test() external view returns(string memory){
    if(player1 == address(0)){
      return "a";
    }

    if(player1 == payable(address(0))){
      return "b";
    }else{
      return "c";
    }
  }

  function test2() external pure returns(uint256 ){
    return 1;
  }

  function test3() public view returns(string memory) {
    return  "d";
  }

  function testChoice() external view returns(string memory){
    return choiceofPlayer1;
  }


}