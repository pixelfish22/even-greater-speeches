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
} else if (userName === "") {
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
            console.log(speechesArray[0].author + " was " + speechesArray[0].authorAge + " during this speech.");
            break;
        case "ghandi" :
            console.log(speechesArray[1].author + " was " + speechesArray[1].authorAge + " during this speech.");
            break;
        case "demosthenes" :
            console.log(speechesArray[2].author + " was " + speechesArray[2].authorAge + " during this speech.");
            break;
        default :
            window.prompt("You've misspelled your favorite author. Click donate again to give it another try.");
    }
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
    console.log("This speech was written by " + speechesArray[0].author + " in " + speechesArray[0].year + ".");
    if (speechesArray[0].yearIsBCE === true) {
        console.log("This speech took place before the common era.");
    } else {
        console.log("This speech took place during the common era.");
    };
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
    console.log("This speech was written by " + speechesArray[1].author + " in " + speechesArray[1].year + ".");
    if (speechesArray[1].yearIsBCE === true) {
        console.log("This speech took place before the common era.");
    } else {
        console.log("This speech took place during the common era.");
    };});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
    console.log("This speech was written by " + speechesArray[2].author + " in " + speechesArray[2].year + ".");
    if (speechesArray[2].yearIsBCE === true) {
        console.log("This speech took place before the common era.");
    } else {
        console.log("This speech took place during the common era.");
    };});