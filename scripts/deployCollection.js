const {ethers} = require("hardhat");

async function main(){

  //1st to do is to get a compiled contract
  const NFTCollection = await ethers.getContractFactory("NFTCollection");
  //it is important to keep a / in the end
  const nftCollection = await NFTCollection.deploy(
      "SuperMarioWorldCollection",
      "SPWC",
      "https://ipfs.io/ipfs/QmSeMaCMfnZyoYgJ6ws132oppLxSPfG7d4t4kw6RmKKkn3/"
  );
  await nftCollection.deployed();
  console.log("Success! Contract was deployed to: ", nftCollection.address);

  // we don't need url anymore
  // await animalWorld.mint("https://ipfs.io/ipfs/QmSeMaCMfnZyoYgJ6ws132oppLxSPfG7d4t4kw6RmKKkn3");
  // await animalWorld.mint(3);
  // await animalWorld.mint(1);

  console.log("NFT successfully minted");
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });