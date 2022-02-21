import { Letter } from './Letter';

export class Guess {
    constructor(guess: string[], correctWord: string) {
        this._guess = guess;   
        this._correctWord = correctWord;
    }
    private _guess: string[];
    private _correctWord: string;


    IsCorrect(): boolean {
        if (this._correctWord === this._guess.join('')) {
            return true;
        }
        return false;
    }

    DisplayGuess(): string {

        let output = "";
        output += `<div class="row"><div class="col-1"></div>`;

        this._guess.forEach(element => {
            output += `<div class="col-2 entrybox rightplace">${element}</div>`
        });

        
        // <div class="col-2 entrybox">I</div>
        // <div class="col-2 entrybox rightletter">M</div>
        // <div class="col-2 entrybox">P</div>
        // <div class="col-2 entrybox">L</div>
        output += `<div class="col-1"></div></div>`;

        return output;
    }

}

