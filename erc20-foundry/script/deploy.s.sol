// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import "../src/MyFungibleToken.sol";
import "forge-std/Script.sol";

contract DeployFungibleToken is Script {
    function run() public {
        vm.startBroadcast(vm.deriveKey(vm.envString("BIP39_SEED_PHRASE"), 0));
        // Deploy the ERC-20 token
        MyFungibleToken token = new MyFungibleToken();
        // Stop broadcasting calls from our address
        vm.stopBroadcast();
        // Log token address
        console.log("Token Address:", address(token));
    }
}