'use client';

import Grid from "@/app/components/grid/grid";
import { getRandomWord } from "./lib/words";
import { useState } from "react";
import { createArrayWithSpace, matrixOfArrays } from "./lib/common";

export default function Home() {
  const [newWord, setNewWord] = useState("pazos");
  // const newWord = getRandomWord();
  const length = newWord.length;
  

  const initialMatrix = matrixOfArrays(length, 6, '');
  const [matrix, setMatrix] = useState(initialMatrix);
  const [indexRowMatrix, setIndexRowMatrix] = useState(0);


  const [textInput, setTextInput] = useState('');
  const [check, setCheck] = useState(false);


  const handleOnChange = (text: string) => {
    setTextInput(text);
    if (matrix && indexRowMatrix < matrix.length) {
      const newMatrix = [...matrix];
      const arrayFormated = createArrayWithSpace(text, length);
      for (let i = 0; i < newMatrix[indexRowMatrix].length; i++) {
        newMatrix[indexRowMatrix][i] = arrayFormated[i];
      }
      setMatrix(newMatrix);
    }
  }


  const handleClickCheck = () => {
    if (textInput == '' || textInput.length < length) return;
    if ( textInput ==  newWord ) console.log("GANASTES");
    if (indexRowMatrix + 1 == matrix.length) console.log("PERDISTES REY");
    
    setTextInput('')
    setCheck(false)
    setIndexRowMatrix(indexRowMatrix + 1)


  }

  return (
    <main className="bg-white dark:bg-slate-800">
      <div className="rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
        <p>{newWord}</p>
        <input
          autoFocus={true}
          maxLength={5}
          type="text"
          value={textInput}
          onChange={(e) => handleOnChange(e.target.value)} />

        <button onClick={handleClickCheck}>check!</button>
        <Grid word={newWord} revealResult={check} matrix={matrix} currentLine={indexRowMatrix}/>
      </div>
    </main>
  );
}
