export type StatusCell = 'correct' | 'incorrect' | 'free' | 'error';

export type Cell = {
    value?: string,
    status?: StatusCell,
    isReveal?: boolean,
    isEditable?: boolean,
    position?: number
};
