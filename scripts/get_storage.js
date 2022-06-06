const hre = require("hardhat");
const { ethers, web3 } = require("hardhat");
const { BigNumber } = require("ethers");

async function main() {
  const contractAddress = "0xdDAA6ee776B701a7729D72BBd0d4FBe4bBb66476"; //Parameter contract
  const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

  let location;
  let param;

  //get premium
  location = await web3.utils.soliditySha3(new BigNumber.from(ZERO_ADDRESS), 2);
  console.log("location: ", location); //location:  0xac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077b

  param = await web3.eth.getStorageAt(contractAddress, location);
  console.log("param: ", param); // param:  0x0000000000000000000000002d54777d59f1ae50d0ebab0eddb3098ee1eb30e4
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
