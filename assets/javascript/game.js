// I know the number at element 0 of each array is worthless but the program will break if I remove it.
var composers = [
    ["goodvideo", "Rachmaninoff", "Sergei", "1873-1943", "Piano Concerto No. 2 Op. 18, 2nd Movement", "Yuja Wang, Piano", '<iframe width="560" height="315" src="https://www.youtube.com/embed/qQCH0QPoCfs?autoplay=1&rel=0&amp;controls=0&amp;showinfo=0&amp;start=4" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>'],
    ["goodvideo", "Schubert", "Franz", "1797-1828", "Impromptu Op. 90 No. 3", "Alfred Brendel, Piano", '<iframe width="560" height="315" src="https://www.youtube.com/embed/s15zyzSxrdI?autoplay=1&rel=0&amp;controls=0&amp;showinfo=0&amp;start=6" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>'],
    ["goodvideo", "Beethoven", "Ludwig Van", "1770-1827", "Sonata Pathetique, 2nd Movement", "Alfred Brendel, Piano", '<iframe width="560" height="315" src="https://www.youtube.com/embed/HrbZDgsZUBw?autoplay=1&rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>'],
    ["goodvideo", "Holst", "Gustav", "1874-1934", "The Planets I. Mars, Bringer of War", "Royal Philharmonic Orchestra, Sir Charles Groves, Conductor", '<iframe width="560" height="315" src="https://www.youtube.com/embed/KUTByW8NElo?autoplay=1&rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>'],
    ["goodvideo", "Mozart", "Wolfgang Amadeus", "1756-1791", "Piano Sonata No. 11 in A, First Movement", "Mitsuko Uchida, Piano", '<iframe width="560" height="315" src="https://www.youtube.com/embed/qbn692EKQLw?autoplay=1&rel=0&amp;controls=0&amp;showinfo=0&amp;start=2" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>'],
    ["goodvideo", "Chopin", "Frederic", "1810-1849", "Prelude No. 4 in E Minor", "Martha Argerich, Piano", '<iframe width="560" height="315" src="https://www.youtube.com/embed/Tovh6JjaQ1A?autoplay=1&rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>'],
    ["goodvideo", "Satie", "Erik", "1866-1925", "Gymnopedie No. 1", "Lars Roos, Piano", '<iframe width="560" height="315" src="https://www.youtube.com/embed/rIjWutnXZz8?autoplay=1&rel=0&amp;controls=0&amp;showinfo=0&amp;start=9" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>'],
    ["goodvideo", "Barber", "Samuel", "1910-1981", "Adagio for Strings, Op. 11", "Atlanta Symphony Orchestra, Yoel Levi, Conductor", '<iframe width="560" height="315" src="https://www.youtube.com/embed/xDEvJ9vErJw?autoplay=1&rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>'],
    ["goodvideo", "Bach", "Johann Sebastian", "1685-1750", "Cello Suite No. 1 - Prelude", "Yo-Yo Ma, Cello", '<iframe width="560" height="315" src="https://www.youtube.com/embed/PCicM6i59_I?autoplay=1&rel=0&amp;controls=0&amp;showinfo=0&amp;start=4" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>'],
    ["untested", "Debussy", "Claude", "1862-1918",  "Reflets dans l'eau", "Jean-Efflam Bavouzet, Piano", '<iframe width="560" height="315" src="https://www.youtube.com/embed/UAEvlfWB7V4?autoplay=1&rel=0&amp;controls=0&amp;showinfo=0&amp;start=10" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>']
];

// play game at least once
var wins = 0;
var losses = 0;
var wantsToPlay = true;
// each alphabet letter can have one of four statuses:
// unset = default 
// unselected = the letter hasn't been picked yet
// correct = the letter is picked and is part of the solution
// wrong = the letter is picked and is not part of the solution
var alphabet = {
    "a": "unset",
    "b": "unset",
    "c": "unset",
    "d": "unset",
    "e": "unset",
    "f": "unset",
    "g": "unset",
    "h": "unset",
    "i": "unset",
    "j": "unset",
    "k": "unset",
    "l": "unset",
    "m": "unset",
    "n": "unset",
    "o": "unset",
    "p": "unset",
    "q": "unset",
    "r": "unset",
    "s": "unset",
    "t": "unset",
    "u": "unset",
    "v": "unset",
    "w": "unset",
    "x": "unset",
    "y": "unset",
    "z": "unset"
};
var numberOfGuesses = 9;
var randomComposerIndex = 0;
var puzzleAnswer = "";
var answerSoFar = "";
var wrongLetters = [];
var wrongLetterDisplay = "";
var correctLetters = 0;
var isCorrectLetter = false;
function initializeSettings() {
    numberOfGuesses = 15;
    // initialize each letter value to unselected
    document.getElementById("guesses-left").innerHTML = numberOfGuesses;

    randomComposerIndex = Math.floor(Math.random() * composers.length);
    // assign random composer as the hangman answer
    puzzleAnswer = composers[randomComposerIndex][1].toUpperCase(); // makes answer uppercase; index [][1] is the composer's last name
    console.log(wantsToPlay);
    console.log("randomComposerIndex: " + randomComposerIndex);
    for (var letter in alphabet) {
        alphabet[letter] = "unselected";
    }
    document.getElementById("win-counter").innerHTML = wins;
    document.getElementById("loss-counter").innerHTML = losses;

    console.log("puzzleAnswer: " + puzzleAnswer);

    answerSoFar = "";
    // write correct number of spaces to HTML
    for (var i = 0; i < puzzleAnswer.length; i++) {
        answerSoFar += "_ ";
    }
    document.getElementById("word-blanks").innerHTML = answerSoFar;

    wrongLetters = [];
    document.getElementById("wrong-guesses").innerHTML = "";
    // if letter is unselected, check if letter is in puzzleAnswer
    // if letter is correct, output it in HTML document along with other correct letters as many times as needed
    correctLetters = 0;
    wrongLetterDisplay = "";
    document.getElementById("wrong-guesses").innerHTML = wrongLetterDisplay;
}

function playAgain() {
    var playAgain = confirm("Want to play again?");
    if (playAgain) {
        initializeSettings();
        return true;
    } else {
        alert("Thanks for playing!");
        return false;
    }
}

function displayNumberOfGuesses(number) {
    document.getElementById("guesses-left").innerHTML = number;
    console.log("numberOfGuesses: " + number);
}

initializeSettings();

document.onkeyup = function (event) {
    var keyCommand = event.key;
    console.log("keyCommand: " + keyCommand);
    isCorrectLetter = false;
    if (keyCommand in alphabet) {
        answerSoFar = "";
        if (alphabet[keyCommand.toLowerCase()] === "correct") {
            answerSoFar += puzzleAnswer.charAt(i).toUpperCase() + " ";
        } else if (alphabet[keyCommand] === "unselected") {
            for (var i = 0; i < puzzleAnswer.length; i++) { // update "word-blanks" and "wrong-guesses" IDs in index.html
                if (puzzleAnswer.charAt(i).toLowerCase() == keyCommand) { // found match in puzzleAnswer
                    answerSoFar += keyCommand.toUpperCase() + " ";
                    isCorrectLetter = true;
                    correctLetters++;
                    numberOfGuesses--;
                    alphabet[keyCommand] = "correct";
                    document.getElementById("word-blanks").innerHTML = answerSoFar;
                    console.log("answerSoFar: " + answerSoFar);
                    if (puzzleAnswer.length === correctLetters) {
                        // if puzzle is solved, output congratulations message, increment wins variable
                        // display all composer information, and play youtube video in background
                        wins++;
                        document.getElementById("win-counter").innerHTML = wins;
                        document.getElementById("composer-name").innerHTML = composers[randomComposerIndex][1] + ", " + composers[randomComposerIndex][2]; // displays last name, comma, and first name
                        document.getElementById("years-lived").innerHTML = composers[randomComposerIndex][3]; // composers[randomComposerIndex][3] is years lived
                        document.getElementById("piece").innerHTML = composers[randomComposerIndex][4]; // composers[randomComposerIndex][4] is title of piece
                        document.getElementById("performer").innerHTML = composers[randomComposerIndex][5]; //  composers[randomComposerIndex][5] is performer
                        document.getElementById("video-player").innerHTML = composers[randomComposerIndex][6]; // composers[randomComposerIndex][6] is the iframe tag to the video
                        console.log("Youtube iframe link: " + composers[randomComposerIndex][6]);
                        alert("You win!");
                        playAgain();
                    } else if (isCorrectLetter === false && i === puzzleAnswer.length - 1) { //answer is wrong for the first time
                        alphabet[keyCommand] = "wrong";
                        wrongLetters.push(keyCommand.toUpperCase());
                        numberOfGuesses--;
                        wrongLetterDisplay = "";
                        if (wrongLetters.length > 1) {
                            // if letter is wrong, output it in HTML document along with other wrong letters in order of entry
                            for (var i = 0; i < wrongLetters.length; i++) {
                                wrongLetterDisplay += wrongLetters[i] + " ";
                                console.log("wrongLetterDisplay: " + wrongLetterDisplay);
                            }
                            document.getElementById("wrong-guesses").innerHTML = wrongLetterDisplay;
                            console.log("Wrong letter display: " + wrongLetterDisplay);
                        }
                        displayNumberOfGuesses(numberOfGuesses);
                        if (numberOfGuesses === 0) {
                            losses++;
                            document.getElementById("loss-counter").innerHTML = losses;
                            alert("Sorry, you ran out of guesses.");
                            playAgain();
                        } else {
                            answerSoFar += "_ ";
                        }
                    }
                }
            }
        } else {
            answerSoFar += "_ ";
        }
        document.getElementById("word-blanks").innerHTML = answerSoFar;
        console.log("answerSoFar: " + answerSoFar);
    }
}
