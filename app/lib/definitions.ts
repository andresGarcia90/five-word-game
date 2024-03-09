export type StatusCell = 'free' | 'present'| 'correct'| 'absent'| 'error';

export type Cell = {
    value?: string,
    status?: StatusCell,
    isReveal?: boolean,
    isEditable?: boolean,
    position?: number
};
