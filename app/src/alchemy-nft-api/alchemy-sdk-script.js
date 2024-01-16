// This script demonstrates access to the NFT API via the Alchemy SDK.
import { Network, Alchemy } from "alchemy-sdk";
import { Net } from "web3";

export async function getNFTs (setNFTs) {
    console.log("hello")
// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: "demo", // Replace with your Alchemy API Key.
  network: Network.ETH_SEPOLIA, // Replace with your network.
};

const alchemy = new Alchemy(settings);

// Print owner's wallet address:
const ownerAddr = sessionStorage.getItem('accountId');
console.log("fetching NFTs for address:", ownerAddr);
console.log("...");

// Print total NFT count returned in the response:
const nftsForOwner = await alchemy.nft.getNftsForOwner(ownerAddr);
console.log("number of NFTs found:", nftsForOwner.totalCount);
setNFTs(nftsForOwner.totalCount)
console.log("...");

// Print contract address and tokenId for each NFT:
for (const nft of nftsForOwner.ownedNfts) {
  console.log("===");
  console.log("contract address:", nft.contract.address);
  console.log("token ID:", nft.tokenId);
}
console.log("===");

// Fetch metadata for a particular NFT:
console.log("fetching metadata for a Crypto Coven NFT...");
const response = await alchemy.nft.getNftMetadata(
  "0x45c85f4b444da5a39e4fe67106bb38ba6604cf4d",
  "1"
);
console.log(response)

}