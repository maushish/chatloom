const API_KEY=process.env.MORALIS_API_KEY
const express = require("express");
// Import Moralis
const Moralis = require("moralis").default;
const app = express();
const port = process.env.PORT || 3001

require('dotenv').config()
app.use(express.json());
app.get("/", (req, res) => {
  res.send("YOOO CHECKING");
});

const cookieParser = require('cookie-parser');
const cors = require('cors');

const jwt = require('jsonwebtoken');
app.use(cookieParser())//calling cookie

app.use(
  cors({
    origin: process.env.REACT_URL,
    credentials: true,
  })
);

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