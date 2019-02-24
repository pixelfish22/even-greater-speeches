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

    document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
});