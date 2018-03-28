
var composers = [
    {
        lastName: "Rachmaninoff",
        firstName: "Sergei",
        yearsLived: "1873-1943",
        piece: "Piano Concerto No. 2 Op. 18, 2nd Movement",
        performer: "Yuja Wang - Piano",
        youTubeLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/qQCH0QPoCfs?autoplay=1&rel=0&amp;controls=0&amp;showinfo=0&amp;start=4" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>'
    },

    {
        lastName: "Beethoven",
        firstName: "Ludwig Van",
        yearsLived: "1770-1827",
        piece: "Sonata Pathetique, 2nd Movement",
        performer: "Alfred Brendel - Piano",
        youTubeLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/HrbZDgsZUBw?autoplay=1&rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>'
    },
    {
        lastName: "Holst",
        firstName: "Gustav",
        yearsLived: "1874-1934",
        piece: "The Planets I. Mars, Bringer of War",
        performer: "Royal Philharmonic Orchestra: Sir Charles Groves - Conductor",
        youTubeLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/KUTByW8NElo?autoplay=1&rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>'
    },
    {
        lastName: "Mozart",
        firstName: "Wolfgang Amadeus",
        yearsLived: "1756-1791",
        piece: "Piano Sonata No. 11 in A, First Movement",
        performer: "Mitsuko Uchida - Piano",
        youTubeLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/qbn692EKQLw?autoplay=1&rel=0&amp;controls=0&amp;showinfo=0&amp;start=2" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>'
    },
    {
        lastName: "Chopin",
        firstName: "Frederic",
        yearsLived: "1810-1849",
        piece: "Prelude No. 4 in E Minor",
        performer: "Martha Argerich - Piano",
        youTubeLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Tovh6JjaQ1A?autoplay=1&rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>'
    },
    {
        lastName: "Satie",
        firstName: "Erik",
        yearsLived: "1866-1925",
        piece: "Gymnopedie No. 1",
        performer: "Lars Roos, Piano",
        youTubeLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/rIjWutnXZz8?autoplay=1&rel=0&amp;controls=0&amp;showinfo=0&amp;start=9" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>'
    },
    {
        lastName: "Barber",
        firstName: "Samuel",
        yearsLived: "1910-1981",
        piece: "Adagio for Strings, Op. 11",
        performer: "Atlanta Symphony Orchestra: Yoel Levi - Conductor",
        youTubeLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/xDEvJ9vErJw?autoplay=1&rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>'
    },
    {
        lastName: "Bach",
        firstName: "Johann Sebastian",
        yearsLived: "1685-1750",
        piece: "Cello Suite No. 1 - Prelude",
        performer: "Yo-Yo Ma - Cello",
        youTubeLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/PCicM6i59_I?autoplay=1&rel=0&amp;controls=0&amp;showinfo=0&amp;start=4" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>'
    },
    {
        lastName: "Debussy",
        firstName: "Claude",
        yearsLived: "1862-1918",
        piece: "Reflets dans l'eau",
        performer: "Jean-Efflam Bavouzet - Piano",
        youTubeLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/UAEvlfWB7V4?autoplay=1&rel=0&amp;controls=0&amp;showinfo=0&amp;start=10" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>'
    },
    {
        lastName: "Haydn",
        firstName: "Franz Joseph",
        yearsLived: "1732-1809",
        piece: "Piano Sonata no. 59 in E flat major",
        performer: "Alfred Brendel - Piano",
        youTubeLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/6WSGG__mG5g?autoplay=1&rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>'
    },
    {
        lastName: "Mendelssohn",
        firstName: "Felix",
        yearsLived: "1809-1847",
        piece: "Songs Without Words, No. 12 in F Sharp Minor, Op. 30, No. 6",
        performer: "Christopher Guzman - Piano",
        youTubeLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/usPP8BoCkaw?autoplay=1&rel=0&amp;controls=0&amp;showinfo=0&amp;start=5" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>'
    },
    {
        lastName: "Massenet",
        firstName: "Jules",
        yearsLived: "1842-1912",
        piece: "Meditation from Thais",
        performer: "Japan Philharmonic Orchestra: Harada Koichiro - Conductor, Kamio Mayuko - Violin",
        youTubeLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/G555rLsczMY?autoplay=1&rel=0&amp;controls=0&amp;showinfo=0&amp;start=6" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>'
    }
];

// play game at least once
var wins = 0;
var losses = 0;
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
var numberOfGuesses = 0;
var randomComposerIndex = 0;
var puzzleAnswer = "";
var answerSoFar = "";
var wrongLetters = [];
var wrongLetterDisplay = "";
var correctLetters = 0;
var correctTimesInAnswer = 0;

function initializeSettings() {
    numberOfGuesses = 12;
    // initialize each letter value to unselected
    displayNumberOfGuesses(numberOfGuesses);
    correctLetters = 0;

    randomComposerIndex = Math.floor(Math.random() * composers.length);
    // assign random composer as the hangman answer
    puzzleAnswer = composers[randomComposerIndex].lastName.toUpperCase(); // makes answer uppercase; index [][1] is the composer's last name
    // console.log("randomComposerIndex: " + randomComposerIndex);
    // console.log("puzzleAnswer: " + puzzleAnswer);


    for (var letter in alphabet) {
        alphabet[letter] = "unselected";
    }
    $("#win-counter").html(wins);
    $("#loss-counter").html(losses);


    answerSoFar = "";
    // write correct number of spaces to HTML
    for (var i = 0; i < puzzleAnswer.length; i++) {
        answerSoFar += "_ ";
    }
    displayAnswerSoFar(answerSoFar);

    wrongLetters.length = 0;
    displayWrongLetters(wrongLetters);
    // if letter is unselected, check if letter is in puzzleAnswer
    // if letter is correct, output it in HTML document along with other correct letters as many times as needed
}

function displayNumberOfGuesses(number) {
    $("#guesses-left").html(number);
    // console.log("numberOfGuesses: " + number);
}

function displayAnswerSoFar(answerSoFar) {
    $("#word-blanks").html(answerSoFar);
    // console.log("answerSoFar: " + answerSoFar);
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

document.onkeyup = function (event) {
    var keyCommand = event.key;
    // console.log("keyCommand: " + keyCommand);
    keyCommand = keyCommand.toLowerCase();
    if (keyCommand in alphabet) {
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
        displayAnswerSoFar(answerSoFar);
        if (puzzleAnswer.length === correctLetters) {
            // if puzzle is solved, output congratulations message, increment wins variable
            // display all composer information, and play youtube video in background
            wins++;
            displayAnswerSoFar(answerSoFar);
            $("#win-counter").html(wins);
            $("#composer-name").html(composers[randomComposerIndex].lastName + ", " + composers[randomComposerIndex].firstName); // displays last name and first name
            $("#years-lived").html(composers[randomComposerIndex].yearsLived); // composers[randomComposerIndex][3] is years lived
            $("#piece").html(composers[randomComposerIndex].piece); // composers[randomComposerIndex][4] is title of piece
            $("#performer").html(composers[randomComposerIndex].performer); //  composers[randomComposerIndex][5] is performer
            $("#video-player").html(composers[randomComposerIndex].youTubeLink); // composers[randomComposerIndex][6] is the iframe tag to the video
            alert("You won! The answer is " + composers[randomComposerIndex].lastName + "!");
            initializeSettings();
        }
        if (alphabet[keyCommand] === "unselected" && correctTimesInAnswer === 0) { // alphabet[keyCommand] which is still unselected must be wrong
            alphabet[keyCommand] = "wrong";
            wrongLetters.push(keyCommand.toUpperCase());
            displayWrongLetters(wrongLetters);
            numberOfGuesses--;
            displayNumberOfGuesses(numberOfGuesses);
        }
        if (numberOfGuesses === 0) { // test if game is over
            losses++;
            displayAnswerSoFar();
            $("#loss-counter").html(losses);
            alert("You ran out of guesses. The answer is " + composers[randomComposerIndex].lastName + ".");
            initializeSettings();
        }
    }
}

