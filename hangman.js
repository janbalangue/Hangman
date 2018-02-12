function composerList(lastName, firstName, yearsLived, piece, performer) {
    var composer = {};
    composer.lastName = lastName;
    composer.firstName = firstName;
    composer.yearsLived = yearsLived;
    composer.piece = piece;
    composer.performer = performer;
}
var composers = [
    { "Rachmaninoff", "Sergei", 1873-1943", "Piano Concerto No. 2 Op. 18", "Arthur Rubinstein, Piano"},
    { "Wagner", "Richard", "1813-1883", "Ride of the Valkyries - Ring", "Berlin Philharmonic Orchestra, Herbert von Karajan, Conductor"},
    { "Schubert", "Franz", "1797-1828", "Impromptu Op. 90 No. 3", "Alfred Brendel, Piano"},
    { "Beethoven", "Ludwig Van", "1770-1827", "Symphony No. 9, Second Movement - Scherzo", "Berlin Philharmonic Orchestra, Herbert von Karajan, Conductor"},
    { "Holst", "Gustav", "1874-1934", "The Planets I. Mars, Bringer of War", "Orchestre Symphonique De Montreal, Charles Dutoit, Conductor"},
    { "Mozart", "Wolfgang Amadeus", "1756-1791", "Piano Sonata No. 11 in A, First Movement", "Mitsuko Uchida, Piano"},
    { "Chopin", "Frederic", "1810-1849", "Nocturne No. 16 in E-Flat, Op. 55 No. 2", "Ivo Pogorelich, Piano"}
    { "Satie", "Erik", "1866-1925", "Gymnopedie No. 1", "Aldo Ciccolini, Piano"},
    { "Barber", "Samuel", "1910-1981", "Adagio for Strings, Op. 11", "Atlanta Symphony Orchestra, Yoel Levi, Conductor"}
];

// each alphabet letter can have one of three statuses: 
// unselected = the letter hasn't been picked yet
// correct = the letter is picked and is part of the solution
// wrong = the letter is picked and is not part of the solution

var alphabet = {
    a: unselected,
    b: unselected,
    c: unselected,
    d: unselected,
    e: unselected,
    f: unselected,
    g: unselected,
    h: unselected,
    i: unselected,
    j: unselected,
    k: unselected,
    l: unselected,
    m: unselected,
    n: unselected,
    o: unselected,
    p: unselected,
    q: unselected,
    r: unselected,
    s: unselected,
    t: unselected,
    u: unselected,
    v: unselected,
    w: unselected,
    x: unselected,
    y: unselected,
    z: unselected
};
// put each composer into composerList
composers.forEach(list => composerList(list));

// play game at least once
var wantsToPlay = true;

while (wantsToPlay) {

    // initialize each letter value to unselected
    for each(var letter: alphabet) {
        alphabet[letter] = "unselected";
    }

    // assign random composer as the hangman answer
    var randomComposerIndex = Math.floor(Math.random() * composers.length);

    // make answer all uppercase
    var puzzleAnswer = composers[randomComposerIndex].toUpperCase();

    document.onkeyup = function (event) {
        var keyCommand = String.fromCharCode(event.which).toUpperCase();
    }

    wantsToPlay = prompt("Want to play again?");
}