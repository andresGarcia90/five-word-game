'use client';

import Grid from "@/app/components/grid/grid";
import { getRandomWord } from "./lib/words";
import { useState } from "react";
import { checkSolution, createArrayWithSpace, matrixOfArrays } from "./lib/common";
import Keyboard from "./components/keyboard/keyboard";
import { Congrats } from "./components/message/congrats";
import { Failure } from "./components/message/failure";

const initialState = getRandomWord();
const initialStateList = new Map<string, string>();
console.log("Solution: ", initialState);

export default function Home() {
  const [newWord, setNewWord] = useState(initialState);
  const [length, setLength] = useState(newWord.length);
  

  const initialMatrix = matrixOfArrays(length, 6, '');
  const [matrix, setMatrix] = useState(initialMatrix);
  const [indexRowMatrix, setIndexRowMatrix] = useState(0);


  const [textInput, setTextInput] = useState('');
  const [check, setCheck] = useState(false);

  const [listLetterUsed, setListLetterUsed] = useState(initialStateList);

  const [showCongrats, setShowCongrats] = useState(false);
  const [showFailure, setShowFailure] = useState(false);

  const handleOnChange = (text: string) => {
    text = text.toUpperCase();
    setTextInput(text);
    if (matrix && indexRowMatrix < matrix.length) {
      const newMatrix = [...matrix];
      const arrayFormated = createArrayWithSpace(text, length);
      for (let i = 0; i < newMatrix[indexRowMatrix].length; i++) {
        newMatrix[indexRowMatrix][i].value = arrayFormated[i];
      }
      setMatrix(newMatrix);
    }
  }

  const handleKeyPress = (key: any) => {
    let newText = textInput;
    switch (key) {
      case 'DELETE':
        newText = newText.slice(0,-1);
        handleOnChange(newText);
        break;
      case 'ENTER':
        //newText = newText.slice(0,-1);
        handleClickCheck();
        break;
      default:
        newText = `${newText}${key}`
        handleOnChange(newText);
        break;
    }
    
  };

  const handleClickCheck = () => {
    if (textInput == '' || textInput.length < length) return;
    if ( textInput ==  newWord ) setShowCongrats(true);
    if (indexRowMatrix + 1 == matrix.length) setShowFailure(true);
    const partialSolution = checkSolution(newWord, textInput);
    const newMatrix = [...matrix];
    partialSolution.forEach((solution, index) => {
      newMatrix[indexRowMatrix][index].status = solution;
      const actualLetter = `${newMatrix[indexRowMatrix][index].value}`;
      const newListLetterUsed = listLetterUsed;
      if (solution == 'correct' || solution !== 'free') {
        newListLetterUsed.set(actualLetter, solution);
      }
      setListLetterUsed(newListLetterUsed)
      
    });
    setMatrix(newMatrix);
    setTextInput('')
    setCheck(false)
    setIndexRowMatrix(indexRowMatrix + 1)
  }


  const resetGame = () => {
    const word = getRandomWord();
    console.log(word);
    setNewWord(word);
    setLength(word.length);
    setMatrix(matrixOfArrays(word.length, 6 ,''));
    setIndexRowMatrix(0)
    setTextInput('');
    setCheck(false);
    setListLetterUsed(new Map<string, string>());
  }

  const handleCongratsClose = () => {
    setShowCongrats(false);
    resetGame();
  }
  const handleFailureClose = () => {
    setShowFailure(false);
    resetGame();
  }

  return (
    <main className="bg-white dark:bg-slate-800">
      <div className="rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
        <input
          autoFocus={true}
          maxLength={5}
          type="text"
          value={textInput}
          onChange={(e) => handleOnChange(e.target.value)} />

        <button onClick={handleClickCheck}>check!</button>
        <Grid word={newWord} revealResult={check} matrix={matrix} currentLine={indexRowMatrix}/>
        <Keyboard keysUsed={listLetterUsed} onKeyPress={handleKeyPress}/>
        {showCongrats && <Congrats onCloseCongrats={handleCongratsClose} />}
        {showFailure && <Failure onCloseFailure={handleFailureClose} />}
      </div>
    </main>
  );
}
