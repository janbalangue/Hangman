function composerList(lastName, firstName, yearsLived, piece, performer) {
    var composer = {};
    composer.lastName : lastName,
    composer.firstName : firstName,
    composer.yearsLived : yearsLived,
    composer.piece : piece,
    composer.performer : performer,
    composer.video : video,

    playVideo : function() {
        eval(composer.video);
    }
}
var composers = [
    { "Rachmaninoff", "Sergei", "1873-1943", "Piano Concerto No. 2 Op. 18", "Arthur Rubinstein, Piano", '<iframe width="560" height="315" src="https://www.youtube.com/embed/M_VCbnqbwwA?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'},
    { "Wagner", "Richard", "1813-1883", "Ride of the Valkyries - Ring", "Berlin Philharmonic Orchestra, Herbert von Karajan, Conductor", '<iframe width="560" height="315" src="https://www.youtube.com/embed/aOyaC1DvBvw?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'},
    { "Schubert", "Franz", "1797-1828", "Impromptu Op. 90 No. 3", "Alfred Brendel, Piano", '<iframe width="560" height="315" src="https://www.youtube.com/embed/s15zyzSxrdI?rel=0&amp;controls=0&amp;showinfo=0&amp;start=6" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'},
    { "Beethoven", "Ludwig Van", "1770-1827", "Symphony No. 9, Second Movement - Scherzo", "Berlin Philharmonic Orchestra, Herbert von Karajan, Conductor", '<iframe width="560" height="315" src="https://www.youtube.com/embed/aFPJAbIRapQ?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'},
    { "Holst", "Gustav", "1874-1934", "The Planets I. Mars, Bringer of War", "Orchestre Symphonique De Montreal, Charles Dutoit, Conductor", '<iframe width="560" height="315" src="https://www.youtube.com/embed/rhuUKodsFhU?rel=0&amp;controls=0&amp;showinfo=0&amp;start=6" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'},
    { "Mozart", "Wolfgang Amadeus", "1756-1791", "Piano Sonata No. 11 in A, First Movement", "Mitsuko Uchida, Piano", '<iframe width="560" height="315" src="https://www.youtube.com/embed/qbn692EKQLw?rel=0&amp;controls=0&amp;showinfo=0&amp;start=2" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'},
    { "Chopin", "Frederic", "1810-1849", "Nocturne No. 16 in E-Flat, Op. 55 No. 2", "Ivo Pogorelich, Piano", '<iframe width="560" height="315" src="https://www.youtube.com/embed/DQG2Vz_3gv8?rel=0&amp;controls=0&amp;showinfo=0&amp;start=3" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'}
    { "Satie", "Erik", "1866-1925", "Gymnopedie No. 1", "Aldo Ciccolini, Piano", '<iframe width="560" height="315" src="https://www.youtube.com/embed/aSnw28dz2DM?rel=0&amp;controls=0&amp;showinfo=0&amp;start=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'},
    { "Barber", "Samuel", "1910-1981", "Adagio for Strings, Op. 11", "Atlanta Symphony Orchestra, Yoel Levi, Conductor", '<iframe width="560" height="315" src="https://www.youtube.com/embed/xDEvJ9vErJw?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'}
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
    for each(var kkey: alphabet) {
        alphabet[kkey] = "unselected";
    }

    // assign random composer as the hangman answer
    var randomComposerIndex = Math.floor(Math.random() * composerList.length);

    // make answer all uppercase
    var puzzleAnswer = composerList[randomComposerIndex].lastName.toUpperCase();

    document.onkeyup = function (event) {
        var keyCommand = String.fromCharCode(event.which).toUpperCase();
        // if letter is unselected, check if letter is in puzzleAnswer
        // if letter is correct, output it in HTML document along with other correct letters as many times as needed
        // if letter is wrong, output it in HTML document along with other wrong letters
        // if puzzle is solved, output congratulations message, increment wins variable, 
        // display all composer information, and play youtube video in background
        // if numberOfGuesses == 0 then output "you lost" message and increment losses variable
    }

    wantsToPlay = prompt("Want to play again?");
}