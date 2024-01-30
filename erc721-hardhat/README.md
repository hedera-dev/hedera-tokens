# ERC721 Hardhat Demo

This project contains a [non-fungible token](https://eips.ethereum.org/EIPS/eip-721) implementation
that inherits from [OpenZeppelin's ERC721 implementation](https://docs.openzeppelin.com/contracts/5.x/api/token/erc721).

It uses the hardhat development framework to:

- Compile
- Test
- Deploy
- Verify

the smart contract.

Compilation and testing occur on `localhost`;
whereas deployment and verification occur on Hedera Testnet (a public network).

This project has been designed as a minimal example demonstration;
and a starting point for projects.

## Compile 

```shell
npm run compile
```

## Test

```shell
npm run test
```

## Deploy

```shell
npm run deploy
```

Then visit Hashscan (a Hedera network explorer) at the URL that is output, for example:
[`https://hashscan.io/testnet/contract/0x6eae9247C122b3e3CDC621F61F757B809bF7455a`](https://hashscan.io/testnet/contract/0x6eae9247C122b3e3CDC621F61F757B809bF7455a).

Under the *Contract Bytecode* section, you should see the EVM bytecode for this smart contract.

## Verify

```shell
npm run verify
```

Then visit Hashscan (a Hedera network explorer) at the URL that is output, for example:
[`https://hashscan.io/testnet/contract/0x6eae9247C122b3e3CDC621F61F757B809bF7455a`](https://hashscan.io/testnet/contract/0x6eae9247C122b3e3CDC621F61F757B809bF7455a).

Under the *Contract Bytecode* section, you should still see the EVM bytecode for this smart contract;
and you show also see the Solidity source code as well.
