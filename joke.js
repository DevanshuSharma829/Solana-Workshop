var oneLinerJoke = require('one-liner-joke');

/*
The variable getRandomJoke will contain a random joke with a format:
{"body":"Artificial intelligence is no match for natural stupidity.","tags":["intelligence","stupid"]}
*/
var getRandomJoke = oneLinerJoke.getRandomJoke({
    'exclude_tags': ['dirty', 'racist', 'marriage']
  });
console.log(getRandomJoke)