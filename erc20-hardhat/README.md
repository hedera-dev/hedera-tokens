# ERC20 Hardhat Demo

This project contains a [fungible token](https://eips.ethereum.org/EIPS/eip-20) implementation
that inherits from [OpenZeppelin's ERC20 implementation](https://docs.openzeppelin.com/contracts/5.x/api/token/erc20).

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

## Set up

```shell
node -v
# v20.6.1
```

- Note that you will need NodeJs v20 or higher.

```shell
cp .env.example .env
```

- Set the values of `OPERATOR_ID` and `OPERATOR_KEY` to an account from [Hedera Portal](https://portal.hedera.com/login).
- Set the value of `BIP39_SEED_PHRASE` by generating your own seed phrase.
  - Option 1: `npx mnemonics@1.1.3`
  - Option 2: [`iancoleman.io/bip39`](https://iancoleman.io/bip39/)
- Set the value of `RPC_URL_HEDERATESTNET` as a JSON-RPC endpoint for Hedera Testnet.
  - Multiple options described at ["How to Connect to Hedera Networks Over RPC"
](https://docs.hedera.com/hedera/tutorials/more-tutorials/json-rpc-connections)

```shell
npm install
```

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
