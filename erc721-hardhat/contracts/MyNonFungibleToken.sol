// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyNonFungibleToken is ERC721 {
    uint256 public tokenId = 0;

    constructor() ERC721("bguiz non fungible token", "BGZNFT") {
        create();
    }

    function create()
        public
        returns (uint256)
    {
        tokenId += 1;
        _mint(msg.sender, tokenId);
        return tokenId;
    }
}
