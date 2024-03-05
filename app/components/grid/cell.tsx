'use client';

import { REVEAL_TIME_MS, COLOR_CELL } from "@/app/constant/settings";
import classNames from "classnames";

type statusCell = 'correct' | 'incorrect' | 'free' | 'error'

type Props = {
    value?: string
    isEditable?: boolean
    status?: statusCell,
    position?: number
}



export default function Cell({
    value = '', isEditable = true, status = 'free', position = 0
}: Props) {
    // console.log(value, isEditable, status, position);

    const effect = `${REVEAL_TIME_MS * position}ms`
    const colorCell = `bg-${status}`;
    const classes = classNames(
        "rounded-md rounded-md border-2 p-0.5 m-0.5  font-semibold text-xl w-10 h-10 flex min-w-12 min-h-12 justify-center items-center",
        colorCell
    );

    return (
        <div className={classes} style={{ cursor: 'default' }}>{value}</div>
    )
}