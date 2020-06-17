const { assert } = require("chai");

const Marketplace = artifacts.require('Marketplace');

contract('Marketplace', (accounts) => {
  let marketplace;

  Before(async => {
    marketplace = await Marketplace.deployed();
  })

  describe('deployment', async () => {
    it ('Deploys Successfuly', async () => {
      const address = await marketplace.address;
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    });

    it('has name', async () => {
      const name = await marketplace.name();
      assert.equal(name, 'Dapp University Marketplace');
    });
  })
})
