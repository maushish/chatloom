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

app.use(express.json());

app.get("/", (req, res) => {
  res.send("YOOO CHECKING");
});



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
// for our server's method of setting a user session
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const config = {
  domain: process.env.APP_DOMAIN,
  statement: 'Please sign this message to confirm your identity.',
  uri: process.env.REACT_URL,
  timeout: 60,
};

app.post('/request-message', async (req, res) => {
  const { address, chain, network } = req.body;

  try {
    const message = await Moralis.Auth.requestMessage({
      address,
      chain,
      ...config,
    });

    res.status(200).json(message);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.error(error);
  }
});

  //TO verify the message 
  app.post('/verify', async (req, res) => {
    try {
      const { message, signature } = req.body;
  
      const { address, profileId } = (
        await Moralis.Auth.verify({
          message,
          signature,
          networkType: 'evm',
        })
      ).raw;
  
      const user = { address, profileId, signature };
  
      // create JWT token
      const token = jwt.sign(user, process.env.AUTH_SECRET);
  
      // set JWT cookie
      res.cookie('jwt', token, {
        httpOnly: true,
      });
  
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
      console.error(error);
    }
  });

  app.get('/authenticate', async (req, res) => {
    const token = req.cookies.jwt;
    if (!token) return res.sendStatus(403); // if the user did not send a jwt token, they are unauthorized
  
    try {
      const data = jwt.verify(token, process.env.AUTH_SECRET);
      res.json(data);
    } catch {
      return res.sendStatus(403);
    }
  });

  app.get('/logout', async (req, res) => {
    try {
      res.clearCookie('jwt');
      return res.sendStatus(200);
    } catch {
      return res.sendStatus(403);
    }
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