// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyFungibleToken is ERC20 {
    constructor() ERC20("bguiz fungible token", "BGZFT") {
        _mint(msg.sender, 1_000_000_000 * (10 ** 18));
    }
}
