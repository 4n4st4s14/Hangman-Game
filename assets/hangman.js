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
//reset function
function reset(){
   chosenMonster = monsters[Math.floor(Math.random()* monsters.length)].toLowerCase();

   lettersInMonster = chosenMonster.split('');

   numBlanks = lettersInMonster.length;

   letterGuessed = 0;
   rightGuessScore = 0;
   guessesLeft = 11;
   wrongLetters = [];
   blanksAndRight = [];
   onceLetter = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '];
test=false;
  startGame();
}

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

function pickMessage(){
  document.getElementById('message').innerHTML = messageObject[chosenMonster];
};

function winLose() {
  //win when number of blanks filled with right word
  if(rightGuessScore === numBlanks) {
    winCount++;

    document.getElementById('wins').innerHTML = winCount;
    // alert('You Win!');
    // alert(chosenMonster);
    pickPic()
    pickMessage()
    reset()
  } else if (guessesLeft === 0) {
    losses--;

    document.getElementById('losses').innerHTML = losses;
    alert('You Lose');
    reset()
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

//messages Object
var messageObject = {
  "grootslang" : "<h3>Grootslang</h3><br><strong>South Africa</strong><br> Massive serpentine elephant that plagues a deep cave in Richtersveld.",
  "inkanyamba" : "<h3>Inkanyamba</h3><br><strong>South Africa</strong><br> Gigantic, winged eel with a voracious appetite that is associated with brutal storms.",
  "ammit" :  "<h3>Ammit</h3><br><strong>Egypt</strong><br>Goddess with a lion, hippo, and crocodile body. She eats the impure hearts of the souls of the dea, condemning them to be restless forever.",
  "aswang" : "<h3><Aswang></h3><br><strong>Philippines</strong><br>Shape-shifting monster that devours unborn babies. To spot one in the daytime, look for your upside-down reflection in their eyes.",
  "penanggalan": "<h3>Penanggalan</h3><br><strong>Malaysia</strong><br>Detached female head that flies through the night, organs dangling, to search for blood. She reattaches to the rest of her body during the day.",
  "teke teke":  "<h3>Teke Teke</h3><br><strong>Japan</strong><br>Ghost of a young girl who was cut in half by a train. She drags her torso around, seeking to dismember others with a scythe.",
  "ittan momen": "<h3>Ittan Momen</h3><br><strong>Japan</strong><br>Sentient roll of cotton that smothers people until they suffocate.",
  "dullahan": "<h3>Dullahan</h3><br><strong>Ireland</strong><br>Headless rider that uses a human spine as a whip. If one stops riding next to you and calls out your name, you die instantly.",
  "nuckelavee": "<h3>Nuckelavee</h3><br><strong>Orkney</strong><br>Horrific demon that appears as a skinned horse and male torso hybrid and breathes disease and decay.",
  "kelpie": "<h3>Kelpie</h3><br><strong>Scotland</strong><br>Emits a cry that sounds like a drowning person to lure prey into the water, then plunges them into an aquatic grave.",
  "arachne": "<h3>Arachne</h3><br><strong>Greece</strong><br>Weaver who challenged Athena to a contest but was punished for her hubris by being turned into a spider.",
  "la ciguapa": "<h3>La Ciguapa</h3><br><strong>Dominican Republic</strong><br>Enchanting woman with backward feet that lures men into the woods.",
  "yara ma yha who": "<h3>Yara Ma Yha Who</h3><br><strong>Australia</strong><br>Short, red vampire that drinks blood through ocotopus-like suckers on its hands and feet. After a nap, it will vomit out the meal.",

}
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
