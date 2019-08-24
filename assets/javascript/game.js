    
    
    //Statistic variable
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var lettersGuessed = [];

    //Computer choice variable
    var computerPick = alphabet[Math.floor(Math.random () * alphabet.length)];

    //Display variables
    var directions = document.getElementById("directions-text");
    var postWins = document.getElementById("wins");
    var postLosses = document.getElementById("losses");
    var postGuessesLeft = document.getElementById("guessesLeft");
    var postGuessesSoFar = document.getElementById("guessesSoFar")
    console.log("CPU pick: " + computerPick);
    //Generate users pick
    document.onkeyup = function(event) {
        var userPick = event.key;
        lettersGuessed.push(userPick);

        //Loop to determine wins, losses, and guesses left
        if (userPick === computerPick) {
            wins++;
            computerPick = alphabet[Math.floor(Math.random () * alphabet.length)];
            console.log("CPU pick: " + computerPick);
            guessesLeft = 9;
            lettersGuessed = [];
            } else { 
                guessesLeft--;
            }
        console.log(userPick);
            //Hide directions
            //directions.textContent = "";
        
        if (guessesLeft === 0) {
            losses++
            computerPick = alphabet[Math.floor(Math.random () * alphabet.length)];
            console.log("CPU Pick: " + computerPick);
            guessesLeft = 9;
            lettersGuessed = [];
            }
            
        //Display wins, losses, guesses left, and letters guessed
        postWins.innerHtml = "Wins: " + wins;
        console.log("Wins: " + wins);
        postLosses.innerHtml = "Losses: " + losses;
        console.log("Losses: " + losses);
        postGuessesLeft.innerHtml = "Guesses Left" + guessesLeft;
        console.log("Guesses Left: " + guessesLeft)
        postGuessesSoFar.innerHtml = "Letters Guessed: " + lettersGuessed;
        console.log("Letters Guessed: " + lettersGuessed);

    };
    

    
    


