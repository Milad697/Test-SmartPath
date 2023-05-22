const express = require("express"); 
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const homeStartingContent = "Milad Shabani changed this file for test project gived by SmartPath.i am very happy work on this project and i learned much about nodejs language and dependencies."
const aboutContent = "I very intested and happy to Dockerized this project for testing.";
const contactContent = "Let's get in touch to discuss your needs and how I can help. Please feel free to contact me via email, and I will get back to you as soon as possible. I look forward to hearing from you!";

const app = express();

app.set('view engine', 'ejs');

const posts = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.render("home", {homeContent: homeStartingContent, message: posts})
});


app.get("/about", function(req, res) {
  res.render("about", {acontent: aboutContent})
});

app.get("/contact", function(req, res) {
  res.render("contact", {ccontent: contactContent})
});

app.get("/compose", function(req, res) {
  res.render("compose")
});

app.post("/Compose", function(req, res) {
  const textInput = {
    title: req.body.title,
    body: req.body.post
};
posts.push(textInput);
res.redirect("/");
});

app.get("/posts/:topic", function(req, res) {
let topics = _.lowerCase(req.params.topic);

posts.forEach(function(post) {
let storedTitle = _.lowerCase(post.title)

if (topics === storedTitle){
  res.render("post", {bTitle: post.title, content: post.body})
}
})
});


app.use(express.static("public"));

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});

module.exports = app;
