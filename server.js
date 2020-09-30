const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb+srv://sgreilick:8Hb6AdXwPT&B@cluster0.ngdb0.mongodb.net/offline-money-tracker?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useFindAndModify: false
});
const PORT = process.env.PORT || 3000;

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});