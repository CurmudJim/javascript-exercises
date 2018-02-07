function echo(text) {
	return text;
}

function shout(text) {
	return text.toUpperCase();
}

function repeat(text,number=2) {
	return text + ((" " + text).repeat(number - 1));
}

function pieceOfWord(text,number=0) {
	textArray = text.split("")
	piece = ""
	if (number === 0) {
		return "";
	} else {
		for (var i = 0; i < number; i++) {
			piece += textArray[i]
		}
		return piece
	}
}

function firstWord(text) {
	textArray = text.split(" ");
	return textArray[0];
}

function capitalize(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
	// This function just capitalizes the word given to it, use in conjunction with titleCreator
}

function titleCreator(text) {
	textArray = text.split(" ");
	var littleWords = ["the","and","over","a"]
	for (var i = 0 ; i < textArray.length ; i++ ) {
		if (i === 0 || !littleWords.includes(textArray[i])) {
			textArray[i] = capitalize(textArray[i])
		}
	}
	return capitalize(textArray.join(" "));
}

module.exports = {
	echo,
	shout,
	repeat,
	pieceOfWord,
	firstWord,
	titleCreator
}
