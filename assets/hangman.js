//Array of monsters

const monsters = ['Grootslang', 'Inkanyamba', 'Ammit', 'Aswang', 'Penanggalan', 'Diao Si Gui', 'Teke Teke', 'Ittan Momen', 'Dullahan', 'Nuckelavee', 'Kelpie', 'Arachne', 'La Ciguapa', 'Yara Ma Yha Who'];

//Choose monster randomly
let chosenMonster = monsters[Math.floor(Math.random() * monsters.length)];
console.log(chosenMonster);

//arrays for guesses to get pushed to
let rightGuess = [];
let wrongGuess = [];

//Create underscores based on length of monster name
let underscores = [];

let generateUnderscores = () => {
  for (let i = 0; i < chosenMonster.length; i++) {
    underscores.push('_');
  }
  return underscores;
}

console.log(generateUnderscores());
//Get user's guess -one guess per letter of alphabet
document.addEventListener('keypress', (event) => {
  let keycode = event.keyCode;
  /*console.log(keyCode);*/
  let keyword = String.fromCharCode(keycode);
  console.log(keyword);
//Check if letter guessed is in randomly chosen word- compare using indexOf

  if (chosenMonster.indexOf(keyword) > -1) {
    console.log(rightGuess);
      rightGuess.push(keyword);
  } else {
    wrongGuess.push(keyword);
    console.log(wrongGuess);
  }
});

//If it is, have it populate the underscore at it's index location as well as the Rigt Guess area

//if it's not, have it populate in the wrong Guess area and decrease lives by 1

//continue until lives = 0 or all underscores filled
