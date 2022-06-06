//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Storage {
    event Deposit(address indexed depositor, uint256 amount, uint256 mint);

    mapping(address => address) private premium1;
    mapping(address => address) private premium2;
    mapping(address => address) private premium;

    constructor() {
        premium[0x0000000000000000000000000000000000000000] = address(this);
        console.log(premium[0x0000000000000000000000000000000000000000]);
    }
}
