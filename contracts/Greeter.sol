//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Greeter {
    mapping(address => address) private premium;

    constructor() {
        premium[address(this)] = address(this);
        console.log(premium[address(this)]);
    }
}
