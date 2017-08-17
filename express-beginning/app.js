var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hi there!');
});

app.get('/bye', function(req, res){
  res.send('Bye bye!');
});

app.get('/dog', function(req, res){
  res.send('Woof!');
});

app.get('/r/:subredditName', function(req, res){
  res.send('Making use of route parameters.')
});

app.get('/r/:subredditName/comments/:id/:title', function(req, res){
  var subreddit = req.params.subredditName;
  res.send('Wild all the ' + subreddit.toUpperCase() + ' things.');
});

app.get('*', function(req, res){
  res.send('Everything is awesome!');
});

app.listen(3000, function(){
  console.log("Server's a go!");
});
