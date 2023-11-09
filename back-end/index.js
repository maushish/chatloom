require('dotenv').config()
const API_KEY=process.env.MORALIS_API_KEY
const express = require("express");
// Import Moralis
const Moralis = require("moralis").default;
// Import the EvmChain dataType
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const app = express();
const port = 3001;

// Add a variable for the api key, address and chain
const MORALIS_API_KEY = API_KEY;
const address = "0xD4cd86fC20602Bb54bb76A6052b8a716B1837e79";
const chain = EvmChain.ETHEREUM;

app.get("/", (req, res) => {
  res.send("YOOO CHECKING");
});

// Add this a startServer function that initialises Moralis
const startServer = async () => {
  await Moralis.start({
    apiKey: API_KEY,
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

// Call startServer()
startServer();

//Fetching data from the blockchain regarding the address
async function getData() {
    //get native balance
    const yourBalance= await Moralis.EvmApi.balance.getNativeBalance({
        address,chain,
    });
    //format the balance in terms of ether
    const native= yourBalance.result.balance.ether
    return {native}
}

app.get("/demo", async (req, res) => {
    try {
      // Get and return the crypto data
      const data = await getData();
      res.status(200);
      res.json(data);
    } catch (error) {
      // Handle errors
      console.error(error);
      res.status(500);
      res.json({ error: error.message });
    }
  });