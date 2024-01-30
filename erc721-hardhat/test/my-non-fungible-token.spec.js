import { expect } from 'chai';
import hre from 'hardhat';

describe('MyNonFungibleToken', function () {
    it('should have an initial supply', async function () {
        const [account1] = await hre.ethers.getSigners();
        const acount1Adress = await account1.getAddress(); 
        const myNonFungibleToken = await hre.ethers.deployContract('MyNonFungibleToken');

        const [ownerOfNft1] = await myNonFungibleToken.ownerOf.staticCallResult(1n);
        expect(ownerOfNft1).to.equal(acount1Adress);
    });
});
