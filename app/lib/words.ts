import { WordLib } from "@arvidbt/wordlib";
import {spanish_words} from '@arvidbt/spanish-words';

const spWords = new WordLib(spanish_words);

export function getRandomWord(): string {
    const returnWord = spWords.random({length: 5});
    console.log(`Magic Word: ${returnWord}`);
    return returnWord.toUpperCase();
}

export function isWord(word: string): boolean{
    return spWords.isWord(word);
}