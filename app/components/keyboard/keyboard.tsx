'use client';

import { useState } from "react";
import ButtonKeyboard from "./button-keyboard";

export default function Keyboard({ onKeyPress }: any) {

    const [keys] = useState([
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
    ]);

    const handleClick = (key: any) => {
        onKeyPress(key);
    };

    return (
        <div className="flex flex-col justify-center mt-4">
            {keys.map((row, rowIndex) => (
                <div key={rowIndex} className="row text-center">
                    {row.map((key, keyIndex) => (
                        <ButtonKeyboard key={keyIndex} letter={key} onClickHandle={handleClick} status={'free'}/>
                    ))}
                </div>
            ))}
        </div>
    )
}

