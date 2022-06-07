const hre = require("hardhat");
const { ethers, web3 } = require("hardhat");
const { BigNumber } = require("ethers");

async function main() {
  const contractAddress = "0x82b37d747494Ed1A8b02a16a7B07dA056c8E36B0"; //Parameter contract
  const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
  const markets = ["0x861709923ed452199B13aF4f9898939841b93f37", "0x7dCD1ACe8A0315ec3417c817b47161212DF40cEd"];

  let location;
  let param;

  //get premium
  for (let i = 0; i < markets.length; i++) {
    location = await web3.utils.soliditySha3(new BigNumber.from(markets[i]), 2);
    console.log("location: ", location);

    param = await web3.eth.getStorageAt(contractAddress, location);
    console.log("param: ", param);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
