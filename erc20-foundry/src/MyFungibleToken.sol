// SPDX-License-Identifier: MIT
pragma solidity 0.8.23;

import "openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";

contract MyFungibleToken is ERC20 {
    constructor() ERC20("abiw fungible token", "ABIW") {
        _mint(msg.sender, 1_000_000_000 * (10 ** 18));
    }
}