import { WORDS } from "./data";

export function getRandomWord() {
    const randomNumber = Math.floor(Math.random() * WORDS.length);
    return WORDS[randomNumber];
}