var express = require('express');
var app = express();
var notFound = "Sorry, page not found... What're you doing with your life?";

app.get('/', function (req, res) {
  res.send('Hi there, welcome to my assignment!');
});

app.get('/speak/:animal', function (req, res) {
  var animal = req.params.animal.toLowerCase();
  var sounds = {
    pig: "Oink",
    cow: "Moo",
    dog: "Woof Woof!",
    bird: "Chirp",
    lion: "Roar!",
  };
  var sound = sounds[animal];

  if (sound) {
    res.send("The " + animal + " says '" + sound + "'");
  } else {
    res.send(notFound);
  }
});

app.get('/repeat/:word/:times', function (req, res) {
  var word = req.params.word;
  var times = req.params.times;
  if (times > 0) {
    var sentence = (word + ' ').repeat(times - 1);
    res.send(sentence + word)
  } else {
    res.send(notFound);
  };
});

app.get('*', function (req, res) {
  res.send(notFound);
});

app.listen(3000, function() {
  console.log('listening for port 3000!');
});
