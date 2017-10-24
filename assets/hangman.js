//VARIABLES FOR DAYZ ----------------------------------

//Array of monsters
const monsters = ['Grootslang', 'Inkanyamba', 'Ammit', 'Aswang', 'Penanggalan', 'Diao Si Gui', 'Teke Teke', 'Ittan Momen', 'Dullahan', 'Nuckelavee', 'Kelpie', 'Arachne', 'La Ciguapa', 'Yara Ma Yha Who', 'you'];

var onceLetter = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

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

var wins = 0;
var losses = 0;
var livesLeft = 11;
var rightGuessScore = 0;


//Choose monster randomly
let chosenMonster = monsters[Math.floor(Math.random() * monsters.length)].toLowerCase();
console.log(chosenMonster);

//arrays for guesses to get pushed to
let rightGuess = [];
let wrongGuess = [];

//Create underscores based on length of monster name
let underscores = [];

//DOM manipulation to fill with underscores
let underscoresDom = document.getElementsByClassName('underscores');
let rightGuessDom = document.getElementsByClassName('rightGuess');

let generateUnderscores = () => {
  for (let i = 0; i < chosenMonster.length; i++) {
    underscores.push(' _ ');

  }
  return underscores;
}

console.log(generateUnderscores());
//Get user's guess -one guess per letter of alphabet
document.addEventListener('keypress', (event) => {
  let keycode = event.keyCode;
  /*console.log(keyCode);*/
  let keyword = String.fromCharCode(keycode).toLowerCase();
  console.log(keyword);
//Check if letter guessed is in randomly chosen word- compare using indexOf

  if (chosenMonster.indexOf(keyword) > -1) {
    console.log(rightGuess);
      rightGuess.push(keyword);
       //logs letter to HTML

      //replace underscores with the guessed right letter
      underscores[chosenMonster.indexOf(keyword)] = keyword;
      console.log(underscores);

      underscoresDom[0].innerHTML = underscores.join(" ");
      rightGuessDom[0].innerHTML = rightGuess.join(" ");



      if(underscores.join('') == chosenMonster) {
        alert('You Won!');
      }

  }  else {
    wrongGuess.push(keyword);
    console.log(wrongGuess);
  }
});

underscoresDom[0].innerHTML= generateUnderscores();
//If it is, have it populate the underscore at it's index location as well as the Rigt Guess area

//if it's not, have it populate in the wrong Guess area and decrease lives by 1

//continue until lives = 0 or all underscores filled
