import "@nomicfoundation/hardhat-toolbox";
// import '@primitivefi/hardhat-dodoc';
import { HardhatUserConfig } from "hardhat/types";


const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  solidity: {
    version: "0.8.16",
  },

  // dodoc: {
  //   outputDir: "./docs/API"
  // }
}

export default config;