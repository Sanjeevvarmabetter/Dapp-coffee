const hre = require("hardhat");

async function main() {
  const Coffee = await hre.ethers.getContractFactory("coffee");
  const coffee = await Coffee.deploy();

  await coffee.waitForDeployment();

  console.log("Deployed Contract address",`${coffee.target}`);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
