import path from 'node:path';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import hre from 'hardhat';

async function main() {
    const scName = 'MyNonFungibleToken';
    const MyFungibleToken = await ethers.getContractFactory(scName);
    console.log('Deploying...');
    const myFungibleToken = await MyFungibleToken.deploy();
    await myFungibleToken.waitForDeployment();
    const deployedAddress = await myFungibleToken.getAddress();
    console.log('Deployed:', deployedAddress);
    try {
        const dirName = path.dirname(fileURLToPath(import.meta.url));
        const filePath = path.resolve(dirName, '../cache/deploy.json');
        const fileContents = {
            [hre.network.name]: {
                [scName]: {
                    deployedAddress,
                },
            },
        };
        await fs.writeFile(filePath, JSON.stringify(fileContents, undefined, 2));
    } catch (ex) {
        console.error(ex);
    }
    const hashscanNetworkName = (hre.network.name).replace('hedera', '');
    console.log(`${scName} - https://hashscan.io/${hashscanNetworkName}/contract/${deployedAddress}`);
}

main();
