import { WordLib } from "@arvidbt/wordlib";
import {spanish_words} from '@arvidbt/spanish-words';

export function getRandomWord(): string {
    const spWords = new WordLib(spanish_words);
    const returnWord = spWords.random({length: 5});
    console.log(`Magic Word: ${returnWord}`);
    return returnWord.toUpperCase();
}