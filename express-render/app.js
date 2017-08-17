var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/fallinlovewith/:thing", function (req, res) {
  var thing = req.params.thing;
  res.render("love", {thingVar: thing});
});

app.get("/posts", function (req, res) {
  var posts = [
    {title: "post1", author: "author1"},
    {title: "post2", author: "author2"},
    {title: "post3", author: "author3"}
  ];

  res.render("posts", {posts: posts});
});

app.get("*", function (req, res) {
  res.render("wild");
});

app.listen(3000, function(){
  console.log("listening on port 3000!");
});
