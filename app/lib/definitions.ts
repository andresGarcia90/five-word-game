export type statusCell = 'correct' | 'incorrect' | 'free' | 'error';

export type cell = {
    letter: string,
    status: statusCell,
    isReveal: boolean,
    isEditable: boolean,
    position: number
};
