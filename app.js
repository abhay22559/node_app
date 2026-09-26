const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ msg: "hello123" });
});

app.listen(4000);
