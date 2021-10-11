// Third Party Modules
const express = require("express");
const mongoose = require("mongoose");
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

// Routes
app.use("/", pageRoute);
app.use("/courses", courseRoute);

// Server Port
const port = 3000;

app.listen(port, () => {
  console.log(`App Started on port: ${port}`);
});
