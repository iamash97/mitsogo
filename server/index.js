// server/index.js

const express = require("express");
const { TRENDS } = require("../client/src/utils/constants");

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/api/trends", (req, res) => {
    res.json({ body: { trends: TRENDS} });
  });
