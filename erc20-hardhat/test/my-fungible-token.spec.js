import { expect } from 'chai';
import hre from 'hardhat';

describe('MyFungibleToken', function () {
    it('should have an initial supply', async function () {
        const myFungibleToken = await hre.ethers.deployContract('MyFungibleToken');

        const [totalSupply] = await myFungibleToken.totalSupply.staticCallResult();
        
        expect(totalSupply).to.equal(1_000_000_000n * (10n ** 18n));
    });
});
