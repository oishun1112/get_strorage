const hre = require("hardhat");
const { ethers, web3 } = require("hardhat");
const { BigNumber } = require("ethers");

async function main() {
  // We get the contract to deploy
  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy();

  const contractAddress = greeter.address;
  console.log("Greeter deployed to: ", contractAddress);

  let location;
  let param;

  //get premium
  location = await web3.utils.soliditySha3(new BigNumber.from(contractAddress), 0);
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
