    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var lettersGuessed = [];
    
    document.onkeyup = function(event) {
        var userGuess = event.key;

        var computerGuess = alphabet[Math.floor(Math.random () * alphabet.length)];

        //if (userGuess === computerGuess) {
           //wins++;
            //} else { 
                //guessesLeft--;
                //} if (guessesLeft === 0) {
                    //losses++;
                    //}
        alert("User guess: " + userGuess);
        alert("Computer Letter: " + computerGuess);
        }
    

    
    


