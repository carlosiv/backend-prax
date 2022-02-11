const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const port = process.env.PORT || 5000;
const envi = process.env.NODE_ENV || "development";

const app = express();

app.use("/api/posts", require("./Routes/PostRoute"));

app.listen(port, () => {
  console.log(`Server started on port ${port} @${envi}`);
});
