const wordleLength : Number = 5;

const wordleOptions = ['SMILE', 'FLOUR', 'CHIPS' ]
let currentWordle: string;

let rightLetterRightPlace: string[];
let rightLetterWrongPlace: string[];
let currentGuess : string[];
let guesses: string[];
const newGameButton = document.getElementById("newGameBtn");
newGameButton!.addEventListener("click",newGame)
const input = document.querySelector('input');
const log : HTMLElement | null = document.getElementById('values');

const guessesElement : HTMLElement | null = document.getElementById('guesses');

input!.addEventListener('beforeinput', updateValue);
input!.focus();

function newGame(){

    rightLetterRightPlace = [];
    rightLetterWrongPlace = [];
    currentWordle = wordleOptions[0];
    input!.disabled = false;
    currentGuess = [];
    guesses = [];
    displayLists();

}

function updateValue(e : InputEvent) {
    if (e.inputType === "insertText" && currentGuess.length < wordleLength) {
        if (e.data == null) {
            return;
        }
        currentGuess.push(e.data.toUpperCase());
        log!.textContent = currentGuess.join('');
    }
    else if(e.inputType === "insertLineBreak" && currentGuess.length == wordleLength) {
        //Check the word matches desired wordle
        log!.textContent = currentGuess.join('') + " checked against " + currentWordle; 
        updateRightLetter();
        guesses.push(currentGuess.join(''));
        displayLists();

        displayGuesses();
    }
    else if(e.inputType ==="deleteContentBackward") {
        currentGuess.pop();
        log!.textContent = currentGuess.join('');
    }
}

function displayLists(){
    outputMatches(document.getElementById("rightplace")!, rightLetterRightPlace);
    outputMatches(document.getElementById("wrongplace")!, rightLetterWrongPlace);

}

function updateRightLetter(){
    for (let index = 0; index < currentWordle.length; index++) {
        const element = currentWordle[index];

        //Right Letter Right Place
        if (element == currentGuess[index] && !rightLetterRightPlace.includes(element)) {
            rightLetterRightPlace.push(element);
        }

        //Right Letter Wrong Place
        if (currentGuess.includes(element) && !rightLetterRightPlace.includes(element) && !rightLetterWrongPlace.includes(element)) {
            rightLetterWrongPlace.push(element);
        }
        
    }
    

}

function outputMatches(element : HTMLElement, letters : string[] ){
    element.innerHTML = letters.join();
}

function displayGuesses(){

    // let previousGuesses = "";

    // for (let index = 0; index < guesses.length; index++) {
    //     const element = guesses[index];
    //     previousGuesses += `<div class="row"><div class="col-12">${element}</div> </div>`;
        
    // }

    let previousGuesses = guesses.map((element, index) => `<div class="row"><div class="col-12">${element}</div> </div>`);

    guessesElement!.innerHTML = previousGuesses.join(''); 
}