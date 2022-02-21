import { LetterType } from './LetterType';

export class Letter {
    private _letter:string;
    private _letterType: LetterType;
    constructor(letter:string, letterType: LetterType = LetterType.UnUsed) {
        this._letter = letter;
        this._letterType = letterType;
    }
}

