import classNames from "classnames";
import BackspaceIcon from '@mui/icons-material/Backspace';

type Props = {
    onClickHandle: any
}

export default function ButtonDeleteKeyboard({ onClickHandle }: Props) {

    const classes = classNames(
        "bg-red-500 hover:bg-red-600 text-black dark:text-white rounded-md font-semibold text-xl min-w-12 p-3 my-2 mx-1",
        "inline-block align-center"
    );

    const handleClick = () => {
        onClickHandle('DELETE')
    }

    return (
        <button onClick={handleClick} className={classes}><BackspaceIcon/></button>
    )
}

