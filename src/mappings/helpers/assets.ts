// This file is automatically generated and contains assets from celo.
// Generate for other networks by running: yarn generate-assets [network].
// Supported networks are: arbitrum, goerli, mainnet, and polygon.

import { Address } from '@graphprotocol/graph-ts';

class Assets {
  public stableAssets: Address[];
  public pricingAssets: Address[];
  public fxAssetAggregators: Address[][];
}

export const cUSD_ADDRESS = Address.fromString('0x765DE816845861e75A25fCA122bb6898B8B1282a');
export const USDC_ADDRESS = Address.fromString('0xcebA9300f2b948710d2653dD7B07f33A8B32118C');
export const USDT_ADDRESS = Address.fromString('0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e');

export const assets: Assets = {
  stableAssets: [
    Address.fromString('0x765DE816845861e75A25fCA122bb6898B8B1282a'), // cUSD
    Address.fromString('0xcebA9300f2b948710d2653dD7B07f33A8B32118C'), // USDC
    Address.fromString('0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e'), // USDT
  ],
  pricingAssets: [
    Address.fromString('0x471EcE3750Da237f93B8E339c536989b8978a438'), // CELO
    Address.fromString('0x66803FB87aBd4aaC3cbB3fAd7C3aa01f6F3FB207'), // WETH
    Address.fromString('0xD629eb00dEced2a080B7EC630eF6aC117e614f1b'), // BTC
  ],
  fxAssetAggregators: [
  ],
};
