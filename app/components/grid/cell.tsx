'use client';

import { StatusCell } from "@/app/lib/definitions";
import { REVEAL_TIME_MS } from "@/app/constant/settings";
import classNames from "classnames";
import styled, {  keyframes } from "styled-components";

type Props = {
    value?: string
    isEditable?: boolean
    status?: StatusCell,
    position?: number
}



export default function CellUI({
    value = '', isEditable = true, status='free', position = 0
}: Props) {
    const effect = `${REVEAL_TIME_MS * position}ms`
    // const riseOut = keyframes`
    //         0%:   { transform: translateY(0%); }
    //         25%:  { transform: translateY(90%); }
    //         50%:  { transform: translateY(180%); }
    //         75%:  { transform: translateY(240%); }
    //         100%: { transform: translateY(360%); }
    //         `  
    // var style = styled.div`cursor: 'default', animation: '${riseOut} ${effect} linear infinite'`;

    const colorVariants = {
        'free':     'bg-white text-black',
        'present':  'bg-yellow-600 text-white dark:bg-yellow-500',
        'correct':  'bg-green-600 text-white dark:bg-green-500',
        'absent':   'bg-slate-800 text-white dark:bg-neutral-500',
        'error':    'bg-red-600 text-white dark:bg-red-500'
        
        // blue: 'bg-blue-600 hover:bg-blue-500 text-white',
        // red: 'bg-red-500 hover:bg-red-400 text-white',
        // yellow: 'bg-yellow-300 hover:bg-yellow-400 text-black',
    }
    
    const colorCell =  `${status ? colorVariants[status] : ""}`;
    const classes = classNames(
        "rounded-md rounded-md border-2 p-0.5 m-0.5  font-semibold text-xl w-10 h-10 flex min-w-12 min-h-12 justify-center items-center",
        colorCell
    );

    return (
        <div className={classes} style={{ cursor: 'default' }}>{value}</div>
    )
}