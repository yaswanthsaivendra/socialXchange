const { expect } = require('chai');
const { ethers } = require('hardhat');


const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')
}


describe("CreditFi", () => {
    let service;

    beforeEach( async() => {
        [owner, worker, customer] = await ethers.getSigners()
        
        const Service = await ethers.getContractFactory("CreditFi")
        service = await Service.deploy();

    })

    describe('testing deployment', () => {

        it('checks for owner', async () => {
            const _owner = await service.owner()
            expect(_owner).to.equal(owner.address);
        } )
    })

    describe('testing user', () => {

        it('checks for user', async () => {
            const user = await service.connect(owner).createUser("name", "name", "name", "name");
            await user.wait()
            console.log(user)
            // expect(user.name).to.equal("name");
        } )
    })


})