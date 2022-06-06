const hre = require("hardhat");
const { ethers, web3 } = require("hardhat");
const { BigNumber } = require("ethers");

async function main() {
  // We get the contract to deploy
  const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

  const Storage = await ethers.getContractFactory("Storage");
  const storage = await Storage.deploy();

  const contractAddress = storage.address;
  console.log("Storage deployed to: ", contractAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
