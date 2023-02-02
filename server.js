const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    port: process.env.PORT,
    MODE: process.env.MODE,
    MONGO_URL: process.env.MONGO_URL,
  });
});

app.listen(port, () => {
  console.log({
    port: process.env.PORT,
    MODE: process.env.MODE,
    MONGO_URL: process.env.MONGO_URL,
  });
});
