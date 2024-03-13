import { StatusCell } from "@/app/lib/definitions";
import classNames from "classnames";

type Props = {
    letter: string,
    status?: StatusCell,
    onClickHandle: any
}

export default function ButtonKeyboard({ letter, status = 'free', onClickHandle }: Props) {

    const colorVariants = {
        'free':     'bg-zinc-200 hover:bg-zinc-400 text-black dark:bg-slate-600 dark:hover:bg-slate-700 dark:text-white',
        'present':  'bg-yellow-600 text-white dark:bg-yellow-500',
        'correct':  'bg-green-600 text-white dark:bg-green-500',
        'absent':   'bg-slate-800 text-white dark:bg-neutral-500',
        'error':    'bg-red-600 text-white dark:bg-red-500'
        
        // blue: 'bg-blue-600 hover:bg-blue-500 text-white',
        // red: 'bg-red-500 hover:bg-red-400 text-white',
        // yellow: 'bg-yellow-300 hover:bg-yellow-400 text-black',
    }



    const colorKey =  `${status ? colorVariants[status] : ""}`;

    const classes = classNames(
        "rounded-md font-semibold text-xl min-w-12 p-3 my-2 mx-1",
        colorKey
    );

    const handleClick = () => {
        onClickHandle(letter)
    }

    return (
        <button onClick={handleClick} className={classes}>{letter}</button>
    )
}

