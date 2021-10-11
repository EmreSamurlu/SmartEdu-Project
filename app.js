// Third Party Modules
const express = require("express");

// Core Module

const app = express();
// Template Engine
app.set("view engine", "ejs");

// Middlewares
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.status(200).render("index", {
    page_name: "index",
  });
});
app.get("/about", (req, res) => {
  res.status(200).render("about", {
    page_name: "about",
  });
});
app.get("/courses", (req, res) => {
  res.status(200).render("courses", {
    page_name: "courses",
  });
});
app.get("/dashboard", (req, res) => {
  res.status(200).render("dashboard", {
    page_name: "dashboard",
  });
});
app.get("/contact", (req, res) => {
  res.status(200).render("contact", {
    page_name: "contact",
  });
});


// Server Port
const port = 3000;

app.listen(port, () => {
  console.log(`App Started on port: ${port}`);
});
