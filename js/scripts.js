$(document).ready(function() {

	$("h1").click(function() {
		alert("This is a header");
	});

	//When you click on the left one, it should show you the original sentence. If you click the other one, it should hide the original sentence and show the encoded one. Use Bootstrap to organize and style your page.

	//image that shows you the original Sentences
	$(".showText").click(function() {
		alert(sentence);
	});

	$(".hideText").click(function() {
		alert(fourthFunction(thirdFunction(sentence)));
	})
	//image that hides the oriignal sentence and shows the encoded ones

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

	//fourth function
	var fourthFunction = function(sentence) {
	  var halfSentence = sentence.length/2;
	  var halfSentenceChar = sentence.charAt(Math.floor(halfSentence)-1);
	  var revHalfSentenceChar = halfSentenceChar + sentence;
	  var makeArray = revHalfSentenceChar.split("");
	  var revArray = makeArray.reverse();
	  var joinArray = revArray.join("");
	  return joinArray;

	}

	alert(fourthFunction(thirdFunction(sentence)));
});
