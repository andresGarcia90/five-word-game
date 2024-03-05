import classNames from "classnames";

type Props = {
    letter: string,
    status: string,
    onClickHandle: any
}

export default function ButtonKeyboard({ letter, status = 'free', onClickHandle }: Props) {
    const colorKey = `bg-${status}`;

    const classes = classNames(
        "bg-indigo-500 rounded-md font-semibold text-xl min-w-12 p-3 my-2 mx-1",
        colorKey
    );

    const handleClick = () => {
        onClickHandle(letter)
    }

    return (
        <button onClick={handleClick} className={classes}>{letter}</button>
    )
}

