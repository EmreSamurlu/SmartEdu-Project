// Third Party Modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
// My Modules
const pageRoute = require("./routes/pageRoutes");
const courseRoute = require("./routes/courseRoute");

// Core Module

//
const app = express();

// Connect DB
mongoose.connect("mongodb://localhost/smartedu-db").then(() => {
  console.log("DB Connected!");
});

// Template Engine
app.set("view engine", "ejs");

// Middlewares
app.use(express.static("public"));
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Routes
app.use("/", pageRoute);
app.use("/courses", courseRoute);

// Server Port
const port = 3000;

app.listen(port, () => {
  console.log(`App Started on port: ${port}`);
});
