const express = require("express");
const port = process.env.PORT || 3980;
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ status: 200, msg: "Welcome to AWS world!" });
});

app.listen(port, () =>
  console.log(`app is running on http://localhost:${port}`)
);
