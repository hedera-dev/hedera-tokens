import path from 'node:path';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import hre from 'hardhat';

async function main() {
    const scName = 'MyFungibleToken';
    try {
        const dirName = path.dirname(fileURLToPath(import.meta.url));
        const filePath = path.resolve(dirName, '../cache/deploy.json');
        const fileContentsRaw = await fs.readFile(filePath);
        const fileContents = JSON.parse(fileContentsRaw);
        const deployments = fileContents[hre.network.name];
        Object.keys(deployments).forEach(async (scName) => {
            const deployedAddress = deployments[scName].deployedAddress;
            console.log('Verifying', scName, 'at', deployedAddress, 'on', hre.network.name, '...');
            await hre.run('verify:sourcify', {
                address: deployedAddress,
            });
            const hashscanNetworkName = (hre.network.name).replace('hedera', '');
            console.log(`${scName} - https://hashscan.io/${hashscanNetworkName}/contract/${deployedAddress}`);
        });
    } catch (ex) {
        console.error(ex);
    }
}

main();
