
var composers = [
    {
        lastName: "Sibelius",
        firstName: "Jean",
        yearsLived: "1865-1957",
        piece: "Violin Concerto in D Minor, Op. 47",
        performer: "Gothenburg Symphony Orchestra: Maestro Kent Nagano, Ray Chen - Violin",
        youTubeLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/3u-unvYedx8?&autoplay=1&controls=1&disablekb=1&fs=0&modestbranding=1&rel=0&playsinline=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        lastName: "Schubert",
        firstName: "Franz",
        yearsLived: "1797-1828",
        piece: "Ave Maria",
        performer: "Aida Garifullina - Soprano",
        youTubeLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ja5hQH9USIU?&autoplay=1&controls=1&disablekb=1&fs=0&modestbranding=1&rel=0&playsinline=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        lastName: "Beethoven",
        firstName: "Ludwig Van",
        yearsLived: "1770-1827",
        piece: "Sonata Pathetique, 2nd Movement",
        performer: "Tiffany Poon - Piano",
        youTubeLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/AhxFNFc8zP8?&autoplay=1&controls=1&disablekb=1&fs=0&modestbranding=1&rel=0&playsinline=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        lastName: "Holst",
        firstName: "Gustav",
        yearsLived: "1874-1934",
        piece: "The Planets I. Mars, Bringer of War",
        performer: "BBC Symphony Orchestra: Susanna Mälkki - Conductor",
        youTubeLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/cXOanvv4plU?&autoplay=1&controls=1&disablekb=1&fs=0&modestbranding=1&rel=0&playsinline=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        lastName: "Massenet",
        firstName: "Jules",
        yearsLived: "1842-1912",
        piece: "Meditation from Thais",
        performer: "Violin - Rusanda Panfili, Piano - Donka Angatscheva",
        youTubeLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/7QtGOWemQhY?&autoplay=1&controls=1&disablekb=1&fs=0&modestbranding=1&rel=0&playsinline=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
];

// play game at least once
var wins = 0;
var losses = 0;
// each alphabet letter can have one of three statuses:
// unselected = the letter hasn't been picked yet
// correct = the letter is picked and is part of the solution
// wrong = the letter is picked and is not part of the solution
var alphabet = {
    "a": "unselected",
    "b": "unselected",
    "c": "unselected",
    "d": "unselected",
    "e": "unselected",
    "f": "unselected",
    "g": "unselected",
    "h": "unselected",
    "i": "unselected",
    "j": "unselected",
    "k": "unselected",
    "l": "unselected",
    "m": "unselected",
    "n": "unselected",
    "o": "unselected",
    "p": "unselected",
    "q": "unselected",
    "r": "unselected",
    "s": "unselected",
    "t": "unselected",
    "u": "unselected",
    "v": "unselected",
    "w": "unselected",
    "x": "unselected",
    "y": "unselected",
    "z": "unselected"
};
var numberOfGuesses = 0;
var randomComposerIndex = 0;
var puzzleAnswer = "";
var answerSoFar = "";
var wrongLetters = [];
var wrongLetterDisplay = "";
var correctLetters = 0;
var correctTimesInAnswer = 0;

function initializeSettings() {
    answerSoFar = "";
    wrongLetterDisplay = "";
    correctLetters = 0;
    correctTimesInAnswer = 0;
    numberOfGuesses = 12;
    // initialize each letter value to unselected
    displayNumberOfGuesses(numberOfGuesses);

    randomComposerIndex = Math.floor(Math.random() * composers.length);
    // assign random composer as the hangman answer
    puzzleAnswer = composers[randomComposerIndex].lastName.toUpperCase();

    for (var letter in alphabet) {
        alphabet[letter] = "unselected";
    }
    $("#win-counter").html(wins);
    $("#loss-counter").html(losses);
    $("#last-letter").html("");
    // write correct number of spaces to HTML
    for (var i = 0; i < puzzleAnswer.length; i++) {
        answerSoFar += "_ ";
    }
    $("#word-blanks").html(answerSoFar);

    wrongLetters.length = 0;
    displayWrongLetters(wrongLetters);
    // if letter is unselected, check if letter is in puzzleAnswer
    // if letter is correct, output it in HTML document along with other correct letters as many times as needed
    document.getElementById("letter-reader").value = "";
}

function displayNumberOfGuesses(number) {
    $("#guesses-left").html(number);

}

function displayAnswerSoFar(keyCommand) {
    correctTimesInAnswer = 0;
    answerSoFar = ""; // reset answerSoFar
    // count correct letters whenever a letter is pressed
    for (var i = 0; i < puzzleAnswer.length; i++) { // update "word-blanks" and "wrong-guesses" IDs in index.html
        if (alphabet[puzzleAnswer.charAt(i).toLowerCase()] === "correct" && puzzleAnswer.charAt(i).toLowerCase() === keyCommand) {
            answerSoFar += puzzleAnswer.charAt(i).toUpperCase() + "  ";
        } else if (puzzleAnswer.charAt(i).toLowerCase() === keyCommand && alphabet[keyCommand] === "unselected") { // found match in puzzleAnswer
            answerSoFar += puzzleAnswer.charAt(i).toUpperCase() + " ";
            correctTimesInAnswer++;
            numberOfGuesses--; // only decrement numberOfGuesses the first time a letter is correct
            displayNumberOfGuesses(numberOfGuesses);
        } else if (alphabet[puzzleAnswer.charAt(i).toLowerCase()] === "correct") {
            answerSoFar += puzzleAnswer.charAt(i).toUpperCase() + "  ";
        } else {
            answerSoFar += "_ ";
        }
    }
    if (correctTimesInAnswer > 0) {
        alphabet[keyCommand] = "correct";
        correctLetters += correctTimesInAnswer;
        // console.log("Correct letters: " + correctLetters);
    }
    $("#word-blanks").html(answerSoFar);
}

function displayWrongLetters(wrongLetters) {
    wrongLetterDisplay = "";
    if (wrongLetters.length > 0) {
        // if letter is wrong, output it in HTML document along with other wrong letters in order of entry
        for (var i = 0; i < wrongLetters.length; i++) {
            wrongLetterDisplay += wrongLetters[i] + " ";
            // console.log("wrongLetterDisplay: " + wrongLetterDisplay);
        }
    }
    $("#wrong-guesses").html(wrongLetterDisplay);
    // console.log("Wrong letter display: " + wrongLetterDisplay);
}

initializeSettings();

function processKey(event) {
    var keyCommand = event.key;
    // console.log("keyCommand: " + keyCommand);
    keyCommand = keyCommand.toLowerCase();
    document.getElementById("letter-reader").value = "";
    if (keyCommand in alphabet) {
        $("#last-letter").html(keyCommand.toUpperCase());
        $("#letter-reader").html("");
        displayAnswerSoFar(keyCommand);
        checkIfWin(correctLetters);
    }
}

function checkIfWin(correctLetters) {
    if (puzzleAnswer.length === correctLetters) {
        // if puzzle is solved, output congratulations message, increment wins variable
        // display all composer information, and play youtube video in background
        wins++;
        $("#win-counter").html(wins);
        $("#composer-name").html(composers[randomComposerIndex].lastName + ", " + composers[randomComposerIndex].firstName);
        $("#years-lived").html(composers[randomComposerIndex].yearsLived);
        $("#piece").html(composers[randomComposerIndex].piece);
        $("#performer").html(composers[randomComposerIndex].performer);
        $("#video-player").html(composers[randomComposerIndex].youTubeLink);
        alert("You won! The answer is " + composers[randomComposerIndex].lastName + "!");
        initializeSettings();
    } else if (alphabet[keyCommand] === "unselected" && correctTimesInAnswer === 0) { // alphabet[keyCommand] which is still unselected must be wrong
        alphabet[keyCommand] = "wrong";
        wrongLetters.push(keyCommand.toUpperCase());
        displayWrongLetters(wrongLetters);
        numberOfGuesses--;
        displayNumberOfGuesses(numberOfGuesses);
        document.getElementById("letter-reader").value = "";             
    } else if (numberOfGuesses === 0) { // test if game is over
        losses++;
        $("#loss-counter").html(losses);
        document.getElementById("letter-reader").value = "";
        alert("You ran out of guesses. The answer is " + composers[randomComposerIndex].lastName + ".");
        initializeSettings();
    }
}


