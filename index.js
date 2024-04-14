const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
mongoose.connect("mongodb://localhost:27017/MoneyList");
let db = mongoose.connection;
db.on("error", () => {
  console.log("Error in connecting the database.");
});
db.once("open", () => {
  console.log("Connected to the database.");
});
app.post("/add", function (req, res) {
  let category_select = req.body.category_select;
  let amount_input = req.body.amount_input;
  let info = req.body.info;
  let date_input = req.body.date_input;

  let data = {
    category: category_select,
    Amount: amount_input,
    Info: info,
    Date: date_input,
  };
  db.collection("Users").insertOne(data, (err, collection) => {
    if (err) {
      throw err;
    }
    console.log("Record inserted successfully");
  });
});
app.get("/", function (req, res) {
  res.set({
    "Allow-access-Allow-Origin": "*",
  });
  return res.redirect("index.html");
});
app.listen(3000, function (req, res) {
  console.log("Starting on the port 3000...");
});
