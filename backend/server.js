const express = require("express");
const dotenv = require("dotenv");
const { errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
const port = process.env.PORT || 5000;
const envi = process.env.NODE_ENV || "development";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/posts", require("./Routes/PostRoute"));
app.use("/api/cart", require("./Routes/CartRoute"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port} @${envi}`);
});
