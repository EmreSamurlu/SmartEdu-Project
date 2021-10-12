// Third Party Modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
// My Modules
const pageRoute = require("./routes/pageRoutes");
const courseRoute = require("./routes/courseRoute");
const categoryRoute = require("./routes/categoryRoute")

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
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Routes
app.use("/", pageRoute);
app.use("/courses", courseRoute);
app.use("/categories", categoryRoute);

// Server Port
const port = 3000;

app.listen(port, () => {
  console.log(`App Started on port: ${port}`);
});
