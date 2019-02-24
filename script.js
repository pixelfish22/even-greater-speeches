var churchillSpeech = {
        'author': 'Churchill',
        'year': 1940,
        'yearIsBCE': false,
        'authorAge': '66'
    },
    ghandiSpeech = {
        'author': 'Ghandi',
        'year': 1942,
        'yearIsBCE': false,
        'authorAge': '73'
    },
    demosthenesSpeech = {
        'author': 'Demosthenes',
        'year': 342,
        'yearIsBCE': true,
        'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],

    userName = window.prompt("Why hello! What is your name?");

if (typeof userName !== "string") {
    userName = window.prompt("Quit playing games! We just want to say hello. What is your name?");
}

if (userName === "") {
    console.log("Okay, I'll just call you User");
    userName = "User";
} else {
    console.log("Hi " + userName + "!");
}


//Button Clicks
document.getElementById('BtnDonate').addEventListener('click', function(){
    var favoriteAnswer = window.prompt("Which of these authors is your favorite: Churchill, Ghandi, or Demosthenes?"),

        favorite = favoriteAnswer.toLowerCase();

    switch (favorite) {
        case "churchill" :
            console.log(churchillSpeech.author + " was " + churchillSpeech.authorAge + " during this speech.");
            break;
        case "ghandi" :
            console.log(ghandiSpeech.author + " was " + ghandiSpeech.authorAge + " during this speech.");
            break;
        case "demosthenes" :
            console.log(demosthenesSpeech.author + " was " + demosthenesSpeech.authorAge + " during this speech.");
            break;
        default :
            console.log("You've misspelled your favorite author. Click donate again to give it another try.");
    }
});

document.getElementById('BtnChurchill').addEventListener('click', function(){

    console.log("This speech was written by " + churchillSpeech.author + " in " + churchillSpeech.year + ".");

    if (churchillSpeech.yearIsBCE) {
        console.log("This speech took place before the common era.");
    } else {
        console.log("This speech took place during the common era.");
    }

    if (churchillSpeech.yearIsBCE) {churchillSpeech.year *= -1}
    
    if(churchillSpeech.year < ghandiSpeech.year &&
        churchillSpeech.year < demosthenesSpeech.year) {
        console.log("This is the oldest speech on the page.");
    } else if (churchillSpeech.year > ghandiSpeech.year &&
        churchillSpeech.year > demosthenesSpeech.year) {
        console.log("This is the most recent speech on the page.");
    }
});

document.getElementById('BtnGhandi').addEventListener('click', function(){

    console.log("This speech was written by " + ghandiSpeech.author + " in " + ghandiSpeech.year + ".");

    if (ghandiSpeech.yearIsBCE) {
        console.log("This speech took place before the common era.");
    } else {
        console.log("This speech took place during the common era.");
    }

    if (ghandiSpeech.yearIsBCE) {ghandiSpeech.year *= -1}

    if(ghandiSpeech.year < churchillSpeech.year &&
        ghandiSpeech.year < demosthenesSpeech.year) {
        console.log("This is the oldest speech on the page.");
    } else if (ghandiSpeech.year > churchillSpeech.year &&
        ghandiSpeech.year > demosthenesSpeech.year) {
        console.log("This is the most recent speech on the page.");
    }
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
    console.log("This speech was written by " + demosthenesSpeech.author + " in " + demosthenesSpeech.year + ".");
    
    if (demosthenesSpeech.yearIsBCE) {
        console.log("This speech took place before the common era.");
    } else {
        console.log("This speech took place during the common era.");
    }

    if (demosthenesSpeech.yearIsBCE) {demosthenesSpeech.year *= -1}

    if(demosthenesSpeech.year < ghandiSpeech.year &&
        demosthenesSpeech.year < churchillSpeech.year) {
        console.log("This is the oldest speech on the page.");
    } else if (demosthenesSpeech.year > churchillSpeech.year &&
        demosthenesSpeech.year > ghandiSpeech.year) {
        console.log("This is the most recent speech on the page.");
    }
});