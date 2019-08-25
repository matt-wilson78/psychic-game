    
    
    //Statistic variable
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var lettersGuessed = [];

    //Computer choice variable
    var computerPick = alphabet[Math.floor(Math.random () * alphabet.length)];

    //Display variables
    var postWins = document.getElementById("wins");
    var postLosses = document.getElementById("losses");
    var postGuessesLeft = document.getElementById("guessesLeft");
    var postGuessesSoFar = document.getElementById("guessesSoFar")

    //Generate users pick
    document.onkeyup = function(event) {
        var userPick = event.key;
        lettersGuessed.push(userPick);

        //Loop to determine wins, losses, and guesses left
        if (userPick === computerPick) {
            wins++;
            computerPick = alphabet[Math.floor(Math.random () * alphabet.length)];
            guessesLeft = 9;
            lettersGuessed = [];
            } else { 
                guessesLeft--;
            }
        
        if (guessesLeft === 0) {
            losses++
            computerPick = alphabet[Math.floor(Math.random () * alphabet.length)];
            guessesLeft = 9;
            lettersGuessed = [];
            }
            
        //Display wins, losses, guesses left, and letters guessed
        postWins.innerHTML = "Wins: " + wins;
        postLosses.innerHTML = "Losses: " + losses;
        postGuessesLeft.innerHTML = "Guesses Left: " + guessesLeft;
        postGuessesSoFar.innerHTML = "Letters Guessed: " + lettersGuessed;

    };
    

    
    


