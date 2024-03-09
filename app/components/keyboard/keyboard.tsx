'use client';

import { useState } from "react";
import ButtonKeyboard from "./button-keyboard";
import ButtonDeleteKeyboard from "./button-delete-keyboard";

type Props = {
    keysUsed: Map<string, string> ,
    onKeyPress: (key: string) => void
}

export default function Keyboard({keysUsed, onKeyPress }: Props) {

    const [keys] = useState([
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DELETE']
    ]);

    const handleClick = (key: any) => {
        onKeyPress(key);
    };

    return (
        <div className="flex flex-col justify-center mt-4">
            <div className="row text-center">
                <button className="bg-green-500 hover:bg-green-600 rounded-md font-semibold text-xl min-w-12 p-3 my-2 mx-1"
                    onClick={() => handleClick('ENTER')}>ENVIAR</button>
            </div>
            {keys.map((row, rowIndex) => (
                <div key={rowIndex} className="row text-center">
                    {row.map((key, keyIndex) => {
                         const statusProcess = keysUsed.get(key) ? keysUsed.get(key) :  'free';
                         return key !== 'DELETE'
                          ? <ButtonKeyboard 
                                key={`BKB-${keyIndex}`} 
                                letter={key} 
                                onClickHandle={handleClick} 
                                status={statusProcess} /> 
                          : <ButtonDeleteKeyboard key={`BDKB`} onClickHandle={handleClick} /> }
                    )}
                </div>
            ))}
        </div>
    )
}

