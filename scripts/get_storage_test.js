const hre = require("hardhat");
const { ethers, web3 } = require("hardhat");
const { BigNumber } = require("ethers");

async function main() {
  // We get the contract to deploy
  const contractAddress = "0x447c953835C68B79C5eaeCA36CcB0164Ed3e583B";
  const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

  //const Storage = await ethers.getContractFactory("Storage");
  //const storage = await Storage.deploy();

  //const contractAddress = storage.address;
  console.log("Storage deployed to: ", contractAddress);

  let location;
  let param;

  //get premium
  location = await web3.utils.soliditySha3(new BigNumber.from(ZERO_ADDRESS), 2);
  console.log("location: ", location);

  param = await web3.eth.getStorageAt(contractAddress, location);
  console.log("param: ", param);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
