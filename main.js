var name = prompt('What name would you like to use?');
var noun = prompt('What noun would you like to use?');
var adjective = prompt('What adjective would you like to use?');


var response = "The coder, " + name + " began coding vanilla JS.";
response += " But they began to wonder if they could eat a " + noun + " while coding.";
response += " The " + noun + " was quite " + adjective + ".";
response += " And it fell down onto their keyboard, making it unusable.";

document.write(response);


var questions = 3;
var questionsLeft = '[' + questions + ' questions left]';
var adjective = prompt('Please type an adjective' + questionsLeft);
questions -= 1;
var questionsLeft = '[' + questions + ' questions left]';
var verb = prompt('Please type a verb' + questionsLeft);
questions -= 1;
var questionsLeft = '[' + questions + ' questions left]';
var noun = prompt('Please type a noun' + questionsLeft);
alert('All done. Ready for the message?');
var sentence = "<h2>There once was a " + adjective;
sentence += ' programmer who wanted to use JavaScript to ' + verb;
sentence += ' the ' + noun + '.</h2>';
document.write(sentence);