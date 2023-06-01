// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const UniswapV3Factory = await hre.ethers.getContractFactory("UniswapV3Factory");
  const uv3 = await UniswapV3Factory.deploy();

  await uv3.deployed();

  const code = await uv3.POOL_INIT_CODE_HASH();
  console.log(`Init code : ${code}`);

  console.log(`Deployed UniswapV3Factory to ${uv3.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
