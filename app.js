const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ msg: "hello" });
});

app.listen(4000);
