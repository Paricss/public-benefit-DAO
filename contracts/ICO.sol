// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./HumanToken.sol";

contract ICO {
  struct Sale {
    address investor;
    uint quantity;
  }
  Sale[] public sales;
  address public token;
  address public admin;
  uint public end;
  uint public price;
  uint public availableTokens;
  uint public minPurchase;
  uint public maxPurchase;
  bool public released;

  constructor (string memory _name,string memory _symbol,uint _totalSupply){
    token = address(new HumanToken(
        _name,
        _symbol,
        _totalSupply
      ));
    admin = msg.sender;
  }

  function start(
    uint duration,
    uint _price,
    uint _availableTokens,
    uint _minPurchase,
    uint _maxPurchase)
  external
  onlyAdmin()
  icoNotActive() {
    require(duration > 0, 'duration should be > 0');
    uint totalSupply = HumanToken(token).totalSupply();
    require(_availableTokens > 0 && _availableTokens <= totalSupply, 'totalSupply should be > 0 and <= totalSupply');
    require(_minPurchase > 0, '_minPurchase should > 0');
    require(_maxPurchase > 0 && _maxPurchase <= _availableTokens, '_maxPurchase should be > 0 and <= _availableTokens');
    end = duration + block.timestamp;
    price = _price;
    availableTokens = _availableTokens;
    minPurchase = _minPurchase;
    maxPurchase = _maxPurchase;
  }



  function buy() payable external icoActive() {
    require(msg.value % price == 0, 'have to send a multiple of price');
//    uint quantity = price * msg.value/(10**18);
    uint quantity = msg.value*price;
    require(msg.value >= minPurchase && quantity<= maxPurchase*10**18, 'have to send between minPurchase and maxPurchase');

    require(quantity <= availableTokens*10**18, 'Not enough tokens left for sale');
    sales.push(Sale(
        msg.sender,
        quantity
      ));
  }

  function buy2()
  payable
  external
  returns(uint256)
  {
    uint256 x = msg.value * 10;
    return x;

  }


  function release()
  external
  onlyAdmin()
//  icoEnded()
  tokensNotReleased() {
    HumanToken tokenInstance = HumanToken(token);
    for(uint i = 0; i < sales.length; i++) {
      Sale storage sale = sales[i];
      tokenInstance.transfer(sale.investor, sale.quantity);
    }
    released = true;
  }

  function withdraw(
    address payable to,
    uint amount)
  external
  onlyAdmin()
  icoEnded()
  tokensReleased() {
    to.transfer(amount);
  }

  function getSale(address _investor) external view returns(uint) {
    for(uint i = 0; i < sales.length; i++) {
      if(sales[i].investor == _investor) {
        return sales[i].quantity;
      }
    }
    return 0;
  }


  modifier icoActive() {
    require(end > 0 && block.timestamp < end && availableTokens > 0, "ICO must be active");
    _;
  }

  modifier icoNotActive() {
    require(end == 0, 'ICO should not be active');
    _;
  }

  modifier icoEnded() {
    require(end > 0 && (block.timestamp >= end || availableTokens == 0), 'ICO must have ended');
    _;
  }

  modifier tokensNotReleased() {
    require(released == false, 'Tokens must NOT have been released');
    _;
  }

  modifier tokensReleased() {
    require(released == true, 'Tokens must have been released');
    _;
  }

  modifier onlyAdmin() {
    require(msg.sender == admin, 'only admin');
    _;
  }

}
