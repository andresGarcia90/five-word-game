'use client';

import { StatusCell } from "@/app/lib/definitions";
import { REVEAL_TIME_MS } from "@/app/constant/settings";
import classNames from "classnames";
import { motion } from "framer-motion"
import { useAnimate, stagger } from "framer-motion"
import { useEffect } from "react";

type Props = {
    value?: string
    isEditable?: boolean
    status?: StatusCell,
    position?: number,
    reveal?: boolean
}

export default function CellUI({ value = '', isEditable = true, status='free', position = 0, reveal = false }: Props) {
    const colorVariants = {
        'free':     'bg-white text-black',
        'present':  'bg-yellow-600 text-white dark:bg-yellow-500',
        'correct':  'bg-green-600 text-white dark:bg-green-500',
        'absent':   'bg-slate-800 text-white dark:bg-neutral-500',
        'error':    'bg-red-600 text-white dark:bg-red-500'
    }
    const colorCell =  `${status ? colorVariants[status] : ""}`;

    const effect = REVEAL_TIME_MS * position;

    const classes = classNames(
        "rounded-md rounded-md border-2 p-0.5 m-0.5 font-semibold text-xl w-10 h-10 flex min-w-12 min-h-12 justify-center items-center dark:text-white",
        colorCell,
    );


    const [scope, animate] = useAnimate()

    if (reveal) {
        animate(scope.current, { rotateX: [0, 180, 0] },  {duration: 1.5, delay: effect })
    }
    
   

    return (
        <div className={classes} ref={scope}>{value}</div>
    )
}