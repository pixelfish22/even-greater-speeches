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

if (typeof userName === 'object') {
    userName = "";
}

if (userName === "") {
    console.log("Okay, I'll just call you User");
    userName = "User";
} else {
    console.log("Hi " + userName + "!");
}

function handleAuthorClick(speechObject) {
  console.log("This speech was written by " + speechObject.author + " in " + speechObject.year + ".");

  if (speechObject.yearIsBCE) {
      console.log("This speech took place before the common era.");
  } else {
      console.log("This speech took place during the common era.");
  }

  if (speechObject.yearIsBCE) {speechObject.year *= -1}

  if(speechObject.year < ghandiSpeech.year &&
      speechObject.year < demosthenesSpeech.year) {
      console.log("This is the oldest speech on the page.");
  } else if (speechObject.year > ghandiSpeech.year &&
      speechObject.year > demosthenesSpeech.year) {
      console.log("This is the most recent speech on the page.");
  }
}

//Button Clicks
document.getElementById('BtnDonate').addEventListener('click', function(){
    var favoriteAnswer = window.prompt("Hey " + userName + "! Which of these authors is your favorite: Churchill, Ghandi, or Demosthenes?");

    if (favoriteAnswer != null) {
        favorite = favoriteAnswer.toLowerCase();
    } else {favorite = ""}

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
    handleAuthorClick(speechesArray[0);
    // or handleAuthorClick(churchillSpeech);
});


document.getElementById('BtnGhandi').addEventListener('click', function(){
    handleAuthorClick(speechesArray[1);
    // or handleAuthorClick(ghandiSpeech);
  
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
     handleAuthorClick(speechesArray[1);
    // or handleAuthorClick(ghandiSpeech);
});
