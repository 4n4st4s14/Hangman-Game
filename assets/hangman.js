//VARIABLES FOR DAYZ ----------------------------------

//Array of monsters
const monsters = ['Grootslang', 'Inkanyamba', 'Ammit', 'Aswang', 'Penanggalan', 'Teke Teke', 'Ittan Momen', 'Dullahan', 'Nuckelavee', 'Kelpie', 'Arachne', 'La Ciguapa', 'Yara Ma Yha Who', ];

//you can only guess each letter and the space bar once
var onceLetter = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '];

//array of images




//var for chosen monster
var chosenMonster= "";
//number of letters in monster
var lettersInMonster = [];
//number of blanks in monster
var numBlanks = 0;
//blanks and right guesses
var blanksAndRight = [];
//wrong guesses
var wrongLetters = [];

//scorers

var winCount = 0;
var losses = 0;
var guessesLeft = 11;
var rightGuessScore = 0;


//FUNCTIONS FOR NIGHTZ-------------------------------------------
//the game

function startGame() {
  //choose random monster
   chosenMonster = monsters[Math.floor(Math.random() * monsters.length)].toLowerCase();
   console.log(chosenMonster);

   //break down monster into letters
   lettersInMonster = chosenMonster.split('');

   //number of blanks
   numBlanks = lettersInMonster.length;

  //populate blanks
  for(var i=0; i < numBlanks; i++) {
    blanksAndRight.push(' _ ');
    document.getElementById('monsterToGuess').innerHTML = blanksAndRight;
  }

  //HTML manipulation
  document.getElementById('monsterToGuess').innerHTML = blanksAndRight.join(' ');
  document.getElementById('numGuesses').innerHTML = guessesLeft;
  document.getElementById('wins').innerHTML = winCount;
  document.getElementById('losses').innerHTML = losses;
  document.getElementById('wrongGuesses').innerHTML = wrongLetters;

  //logs

  console.log(chosenMonster);
  console.log(lettersInMonster);
  console.log(numBlanks);
  console.log(blanksAndRight);

}

function compareLetters(userKey) {
  console.log('It works!');
  //if key pressed is in random monster, then fill in index with key pressed

  if(chosenMonster.indexOf(userKey) > -1){
     //loop it for the number of blanksAndRight
     for(var i = 0; i <numBlanks; i++) {
       if (lettersInMonster[i] === userKey){
         rightGuessScore++;
         blanksAndRight[i] = userKey;
         document.getElementById('monsterToGuess').innerHTML = blanksAndRight.join(' ');
       }
     }
     console.log(blanksAndRight);
  } else {
    wrongLetters.push(userKey);
    guessesLeft--;
    //change HTML
    document.getElementById('numGuesses').innerHTML = guessesLeft;
    document.getElementById('wrongGuesses').innerHTML = wrongLetters;

    console.log('Wrong Letters = ' + wrongLetters);
    console.log('Guesses left ' + guessesLeft);
  }
}

function pickPic(){
  document.getElementById('monsterPicture').src = picObject[chosenMonster];
};

function winLose() {
  //win when number of blanks filled with right word
  if(rightGuessScore === numBlanks) {
    winCount++;

    document.getElementById('wins').innerHTML = winCount;
    // alert('You Win!');
    // alert(chosenMonster);
    pickPic()
  } else if (guessesLeft === 0) {
    losses--;

    document.getElementById('losses').innerHTML = losses;
    alert('You Lose');
  }
}

//image array setup

var picObject = {
        "grootslang" : "./assets/images/grootslang.jpg",
        "inkanyamba" : "./assets/images/inkanyamba.jpg",
        "ammit" :  "./assets/images/ammit.jpg",
        "aswang" : "./assets/images/aswang.jpg",
        "penanggalan": "./assets/images/penanggalan.jpg",
        "teke teke":  "./assets/images/teketeke.jpg",
        "ittan momen": "./assets/images/ittanMomen.jpg",
        "dullahan": "./assets/images/dullahan.jpg",
        "nuckelavee":"./assets/images/nuckelavee.jpg",
        "kelpie": "./assets/images/Kelpie.jpg",
        "arachne": "./assets/images/arachne.jpg",
        "la ciguapa": "./assets/images/laciguapa.jpg",
        "yara ma yha who": "./assets/images/yaramayhawho.jpg",
}
//code to pick corresponding picture to monster
// var monsterPic = Object.values(picObject);

//console.log(Object.values(picObject));

    //  function pickPic() {
    //    if(chosenMonster == Object.keys(picObject)){
    //      document.getElementById('monsterPicture').src = picObject[chosenMonster];
    //      console.log(document.getElementById('monsterPicture'))
    //      console.log('hi')
    //    }
    //  };


// pickPic();``
//start the game
startGame();


//player initialize
document.onkeyup = function(event) {
  test=true;
  var letterGuessed = event.key;
  for(var i = 0; i < onceLetter.length; i++){
    if(letterGuessed === onceLetter[i] && test === true) {
      var spliceWord = onceLetter.splice(i,1)
      console.log("Spliced word: " + spliceWord );

      compareLetters(letterGuessed);
      winLose();
    }

  }
}
