const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
        "https://api.chatengine.io/users/",
        {username: username, secret: username, first_name: username },
        {headers: {"private-key": "f4334f86-6eae-4e83-b26e-04d28fc0cac5"}}
        )
        return res.status(r.status).json(r.data)
  }

  catch (error) {
        return res.status(error.response.status).json(r.response.data)
    }
 
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);