async function main() {
    const MyFungibleToken = await ethers.getContractFactory('MyFungibleToken');
    console.log('Deploying...');
    const myFungibleToken = await MyFungibleToken.deploy();
    await myFungibleToken.waitForDeployment();
    console.log('Deployed:', await myFungibleToken.getAddress());
}

main();
