const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  //create or find useraccounts in chat engine
  try{
    const r = await axios.put(
        'https://api.chatengine.io/users/',
        {username: username, secret: username, first_name: username},
        //allows to create and destroy users 
        {headers: {"private-key": "47e5e745-2554-49c7-8bdd-73458e15a37b"}}
    );
    return res.status(r.status).json(r.data);
    }
  catch(e){
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);