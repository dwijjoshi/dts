const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.set("views");

app.get("/", (req, res) => {
  res.redirect("home");
});

app.get("/home", (req, res) => {
  res.render("index");
});
app.get("/individual", (req, res) => {
  res.render("individual");
});

app.get("/contact", (req, res) => {
  res.render("contactpage");
});
app.get("/gazebo", (req, res) => {
  res.render("gazebo-tent");
});

app.get("/hangingtent", (req, res) => {
  res.render("hanging-tent");
});

app.get("/carparking", (req, res) => {
  res.render("car-parking");
});

app.get("/customizetent", (req, res) => {
  res.render("customize");
});

app.get("/swimmingpool", (req, res) => {
  res.render("swimming-pool");
});
app.get("/walkway", (req, res) => {
  res.render("walk-way");
});
app.listen(5000);
