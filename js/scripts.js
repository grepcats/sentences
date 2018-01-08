//first function
var capFirstLast = function(sentence) {
	var bestLetter = sentence.charAt(0);
	var worstLetter = sentence.charAt(sentence.length-1);
	return bestLetter.toUpperCase() + worstLetter.toUpperCase();
  };

//second function
var revFirstLast = function(sentence) {
	var goldLetter = sentence.charAt(0);
	var bronzeLetter = sentence.charAt(sentence.length-1);
  return bronzeLetter + goldLetter;
}


//assigning variables
var sentence = prompt("Type a sentence!");

//var firstOutput = capFirstLast(sentence);

//alert(firstOutput);

//var secondOutput = revFirstLast(firstOutput);

//alert(secondOutput);

//third function
var thirdFunction = function(sentence) {
	var oneOutput = capFirstLast(sentence);
  var twoOutput = revFirstLast(oneOutput);
  return sentence + twoOutput;
}

alert(thirdFunction(sentence));
