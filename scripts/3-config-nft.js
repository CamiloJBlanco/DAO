import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xC955c9A67F4F502Ef81798377c801d429949BF84");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Consensus",
        description: "This NFT will give you access to consensusDAO!",
        image: readFileSync("scripts/assets/consensus.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();