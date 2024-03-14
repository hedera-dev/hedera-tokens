// SPDX-License-Identifier: MIT
pragma solidity 0.8.23;

import "forge-std/Test.sol";
import "../src/MyFungibleToken.sol";

contract MyFungibleTokenTest is Test {

    MyFungibleToken public myFungibleToken;

    // Test Enviornment Setup
    function setUp() public {
        // Deploying the token
        myFungibleToken = new MyFungibleToken();
    }

    // Test contract initial supply
    function test_ERC20_initial_supply() public {
        assertEq(myFungibleToken.balanceOf(address(this)), 1_000_000_000 * (10 ** 18));
    }

}