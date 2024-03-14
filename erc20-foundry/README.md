# ERC20 Foundry Demo

This project contains a [fungible token](https://eips.ethereum.org/EIPS/eip-20) implementation
that inherits from [OpenZeppelin's ERC20 implementation](https://docs.openzeppelin.com/contracts/5.x/api/token/erc20).

Foundry is a smart contract development tool and is used in this project to:

- Compile
- Test
- Deploy and Verify

the smart contract.

You will compile and test this smart contract on `localhost`, which is your local development environment. Once you're ready, you will deploy the contract to Hedera Testnet, a public network, and verify the contract.

> [!IMPORTANT]
> This project serves as a minimal example demonstration and a foundational starting point for other projects.

## Set up

```shell
cd erc20-foundry
```

Initialize local submodule configuration file
```shell
git submodule init
```

Fetch submodule data
```shell
git submodule update
```

```shell
forge install
```

Add OpenZeppelin
```shell
forge install OpenZeppelin/openzeppelin-contracts --no-commit
```

```shell
cp .env.example .env
```

> [!NOTE]
> Foundry automatically loads a .env file present in your project directory.

- Set the value of `BIP39_SEED_PHRASE` in `erc20-foundry/.env` by generating your own seed phrase.

> [!IMPORTANT]
> You need at least node v20.6.1

  - Option 1: `npx mnemonics@1.1.3`
  - Option 2: [`iancoleman.io/bip39`](https://iancoleman.io/bip39/)

  Fund your account with test HBAR by going to the [faucet](https://portal.hedera.com/faucet)

- Set the value of `RPC_URL_HEDERATESTNET` as a JSON-RPC endpoint for Hedera Testnet.
  - Multiple options described at ["How to Connect to Hedera Networks Over RPC"
](https://docs.hedera.com/hedera/tutorials/more-tutorials/json-rpc-connections)

## Build

```shell
forge build
```

## Test
```shell
forge test
```

## Deploy and Verify

```shell
forge script script/Deploy.s.sol --rpc-url h_testnet --broadcast --verify --verifier sourcify --verifier-url https://server-verify.hashscan.io
```