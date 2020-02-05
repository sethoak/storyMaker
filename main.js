var name = prompt('What name would you like to use?');
var noun = prompt('What noun would you like to use?');
var adjective = prompt('What adjective would you like to use?');


var response = "The coder, " + name + " began coding vanilla JS.";
response += " But they began to wonder if they could eat a " + noun + " while coding.";
response += " The " + noun + " was quite " + adjective + ".";
response += " And it fell down onto their keyboard, making it unusable.";

document.write(response);