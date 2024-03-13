import { StatusCell } from "./definitions";

export function arrayWithValue(value: string, max: number) {
    const arr = new Array(max);
    arr.fill(value);
    return arr;
}

export function createEmptyMatrix(elem: number) {
    const matrix = new Array(elem);
    for (let i = 0; i < elem; i++) {
        matrix[i] = new Array();
    }
    return matrix;
}

export function matrixOfArrays(xNumber: number, yNumber: number, elements: string) {
    const matrix = createEmptyMatrix(yNumber);
    const arrWithValue = arrayWithValue(elements, xNumber);
    for (let i = 0; i < yNumber; i++) {
        //Always needs to call a diferent array
        arrWithValue.forEach((letter, index) => {
            matrix[i].push({
                value: letter,
                status: '',
                isReveal: false,
                isEditable: false,
                position: index
            })
        })
    }
  
    return matrix;
}

export function createArrayWithSpace(text: string, limit: number) {
    const arr = text.split('');
    const arrNumber = arr.length;
    for (let i = arrNumber; i < limit; i++) {
        arr.push('');
    }
    return arr;
}

export function setOfString(text: string): { [key: string]: number } {
    const setOfLetters: { [key: string]: number } = {};
    for (let letter of text) {
        if (letter !== ' ') {
            if (setOfLetters[letter]) {
                setOfLetters[letter]++;
            } else {
                setOfLetters[letter] = 1;
            }
        }
    }
    return setOfLetters;
}


export function checkSolution(solution: string, currentWord: string) {
    const setSolution: { [key: string]: number } = setOfString(solution);
    const setCurrent: { [key: string]: number } = setOfString(currentWord);
    const solutionFormatted: Array<StatusCell> = [];

    currentWord.split('').forEach((letter, index) => {
        if (letter == solution[index]) {
            solutionFormatted.push('correct');
        }
        else {
            if (!setSolution[letter]) {
                solutionFormatted.push('absent');
            }
            if (setSolution[letter] && setSolution[letter] > 0) {
                if (setSolution[letter] < setCurrent[letter]) {
                    solutionFormatted.push('absent')
                } else {
                    solutionFormatted.push('present');
                }
                setCurrent[letter]--;
            }
        }
    });

    return solutionFormatted;
}