export function arrayWithValue(value: string, max: number) {
    const arr = new Array(max);
    arr.fill(value);
    return arr;
}

export function matrixOfArrays(xNumber:number, yNumber:number, elements: string) {
    const matrix = new Array(yNumber);
    const arrWithValue = arrayWithValue(elements,xNumber);
    for (let i = 0; i < yNumber; i++) {
        //Always needs to call a diferent array
        matrix[i] = arrWithValue.slice(0);
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