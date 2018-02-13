var composers = [
    [0, "Rachmaninoff", "Sergei", "1873-1943", "Piano Concerto No. 2 Op. 18", "Arthur Rubinstein, Piano", '<iframe width="560" height="315" src="https://www.youtube.com/embed/M_VCbnqbwwA?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'],
    [1, "Wagner", "Richard", "1813-1883", "Ride of the Valkyries - Ring", "Berlin Philharmonic Orchestra, Herbert von Karajan, Conductor", '<iframe width="560" height="315" src="https://www.youtube.com/embed/aOyaC1DvBvw?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'],
    [2, "Schubert", "Franz", "1797-1828", "Impromptu Op. 90 No. 3", "Alfred Brendel, Piano", '<iframe width="560" height="315" src="https://www.youtube.com/embed/s15zyzSxrdI?rel=0&amp;controls=0&amp;showinfo=0&amp;start=6" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'],
    [3, "Beethoven", "Ludwig Van", "1770-1827", "Symphony No. 9, Second Movement - Scherzo", "Berlin Philharmonic Orchestra, Herbert von Karajan, Conductor", '<iframe width="560" height="315" src="https://www.youtube.com/embed/aFPJAbIRapQ?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'],
    [4, "Holst", "Gustav", "1874-1934", "The Planets I. Mars, Bringer of War", "Orchestre Symphonique De Montreal, Charles Dutoit, Conductor", '<iframe width="560" height="315" src="https://www.youtube.com/embed/rhuUKodsFhU?rel=0&amp;controls=0&amp;showinfo=0&amp;start=6" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'],
    [5, "Mozart", "Wolfgang Amadeus", "1756-1791", "Piano Sonata No. 11 in A, First Movement", "Mitsuko Uchida, Piano", '<iframe width="560" height="315" src="https://www.youtube.com/embed/qbn692EKQLw?rel=0&amp;controls=0&amp;showinfo=0&amp;start=2" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'],
    [6, "Chopin", "Frederic", "1810-1849", "Nocturne No. 16 in E-Flat, Op. 55 No. 2", "Ivo Pogorelich, Piano", '<iframe width="560" height="315" src="https://www.youtube.com/embed/DQG2Vz_3gv8?rel=0&amp;controls=0&amp;showinfo=0&amp;start=3" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'],
    [7, "Satie", "Erik", "1866-1925", "Gymnopedie No. 1", "Aldo Ciccolini, Piano", '<iframe width="560" height="315" src="https://www.youtube.com/embed/aSnw28dz2DM?rel=0&amp;controls=0&amp;showinfo=0&amp;start=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'],
    [8, "Barber", "Samuel", "1910-1981", "Adagio for Strings, Op. 11", "Atlanta Symphony Orchestra, Yoel Levi, Conductor", '<iframe width="560" height="315" src="https://www.youtube.com/embed/xDEvJ9vErJw?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>']
];

// play game at least once
var wantsToPlay = true;
var wins = 0;
var losses = 0;

// each alphabet letter can have one of three statuses: 
// unselected = the letter hasn't been picked yet
// correct = the letter is picked and is part of the solution
// wrong = the letter is picked and is not part of the solution
var alphabet = {
    a: "unselected",
    b: "unselected",
    c: "unselected",
    d: "unselected",
    e: "unselected",
    f: "unselected",
    g: "unselected",
    h: "unselected",
    i: "unselected",
    j: "unselected",
    k: "unselected",
    l: "unselected",
    m: "unselected",
    n: "unselected",
    o: "unselected",
    p: "unselected",
    q: "unselected",
    r: "unselected",
    s: "unselected",
    t: "unselected",
    u: "unselected",
    v: "unselected",
    w: "unselected",
    x: "unselected",
    y: "unselected",
    z: "unselected"
};
var numberOfGuesses;
var randomComposerIndex;
var puzzleAnswer;
var keyCommand = "";
var answerSoFar;
var wrongLetters = [];
var correctLetters;
var wrongLetterDisplay;

function initializeSettings() {
    numberOfGuesses = 9;
    // initialize each letter value to unselected
    document.getElementById("guesses-left").innerHTML = numberOfGuesses;

    randomComposerIndex = Math.floor(Math.random() * composers.length);
    // assign random composer as the hangman answer
    puzzleAnswer = composers[randomComposerIndex][1].toUpperCase(); // makes answer uppercase; 1 is the composer's last name
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

initializeSettings();

while (wantsToPlay) {
    // loop to write puzzle answer so far

    document.onkeyup = function (event) {
        keyCommand = String.fromCharCode(event.which).toLowerCase();
        if (keyCommand in alphabet) {
            answerSoFar = "";
            for (var i = 0; i < puzzleAnswer.length; i++) {
                if (alphabet[keyCommand] === "unselected") {
                    if (puzzleAnswer.charAt(i).toLowerCase() == keyCommand) {
                        answerSoFar += keyCommand.toUpperCase() + " ";
                        correctLetters++;
                        if (i === puzzleAnswer.length - 1) {
                            alphabet[keyCommand] = "correct";
                            numberOfGuesses--;
                        }
                    } else if (alphabet[puzzleAnswer.charAt(i)] === "correct") {
                        answerSoFar += puzzleAnswer.charAt(i).toUpperCase() + " ";
                    } else if (alphabet[keyCommand] === "unselected" && i === puzzleAnswer.length - 1) { //answer is wrong for the first time
                        alphabet[keyCommand] = "wrong";
                        wrongLetters.push(keyCommand.toUpperCase);
                        numberOfGuesses--;
                    } else if (alphabet[keyCommand] === "wrong") {
                        continue;
                    }
                }
            }
            document.getElementById("word-blanks").innerHTML = answerSoFar;
            document.getElementById("guesses-left").innerHTML = numberOfGuesses;
        }
        console.log("answerSoFar: " + answerSoFar);


        // display wrong letters if any

        // if puzzle is solved, output congratulations message, increment wins variable
        // display all composer information, and play youtube video in background
        wrongLetterDisplay = "";
        if (wrongLetters.length > 1) {
            // if letter is wrong, output it in HTML document along with other wrong letters in order of entry
            for (var i = 0; i < wrongLetters.length; i++) {
                if (i === wrongLetters.length - 1) {
                    wrongLetterDisplay += wrongLetters[i];
                } else {
                    wrongLetterDisplay = wrongLetters[i] + ", ";
                }
            }
        } else if (wrongLetters.length === 1) {
            wrongLetterDisplay = wrongLetters[0];
        }
        document.getElementById("wrong-guesses").innerHTML = wrongLetterDisplay;
        console.log("Wrong letter display: " + wrongLetterDisplay);
        if (puzzleAnswer.length === correctLetters) {
            wins++;
            document.getElementById("win-counter").innerHTML = wins;
            document.getElementById("composer-name").innerHTML = composers[randomComposerIndex][1] + ", " +composers[randomComposerIndex][2];
            document.getElementById("years-lived").innerHTML = composers[randomComposerIndex][3]; // sub 3 is years lived
            document.getElementById("piece").innerHTML = composers[randomComposerIndex][4]; // sub 4 is title of piece
            document.getElementById("performer").innerHTML = composers[randomComposerIndex][5]; // sub 5 is performer
            document.getElementById("video-player").innerHTML = eval(composers[randomComposerIndex][6]); // sub 6 is the iframe tag to the video
            wantsToPlay = confirm("Want to play again?");
            if (wantsToPlay) {
                initializeSettings();
            }
        } else if (numberOfGuesses === 0) {
            losses++;
            document.getElementById("loss-counter").innerHTML = losses;
            wantsToPlay = confirm("Want to play again?");
            if (wantsToPlay) {
                initializeSettings();
            }
        }
    }
}
document.getElementById("status-message-1").innerHTML = "Thanks for playing!";
if (wins > losses) {
    document.getElementById("status-message-2").innerHTML = "Congratulations on your score!";
} else if (wins === losses) {
    document.getElementById("status-message-2").innerHTML = "Tie game!";
} else {
    document.getElementById("status-message-2").innerHTML = "Better luck next time!";
}
