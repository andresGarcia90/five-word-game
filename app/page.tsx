'use client';

import { useState } from "react";
import { getRandomWord, isWord } from "./lib/words";
import { checkSolution, createArrayWithSpace, matrixOfArrays } from "./lib/common";
import Grid from "@/app/components/grid/grid";
import Keyboard from "./components/keyboard/keyboard";
import { Congrats } from "./components/message/congrats";
import { Failure } from "./components/message/failure";
import IncorrectWord from "./components/message/incorrect-word";


const initialState = getRandomWord();
const initialStateList = new Map<string, string>();

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

  const [showInvalidWord, setShowInvalidWord] = useState(false);

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
    setCheck(false);
    switch (key) {
      case 'DELETE':
        newText = newText.slice(0, -1);
        handleOnChange(newText);
        setShowInvalidWord(false)
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

  const handleSubmit = (event: any) => {
    event.preventDefault();
    handleClickCheck();
  }

  const handleClickCheck = () => {
    if (textInput == '' || textInput.length < length) return;
    if (!isWord(textInput)) {
      setShowInvalidWord(true);
      setTimeout(() => {
        setShowInvalidWord(false)
      }, 2000);
      return
    }
    if (textInput == newWord) setShowCongrats(true);
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
    setCheck(true);
    setTextInput('');
    setIndexRowMatrix(indexRowMatrix + 1);
  }


  const resetGame = () => {
    const word = getRandomWord();
    setNewWord(word);
    setLength(word.length);
    setMatrix(matrixOfArrays(word.length, 6, ''));
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
      <IncorrectWord show={showInvalidWord} />
      <div className="rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <form onSubmit={handleSubmit}>
          <input
            autoFocus={true}
            maxLength={5}
            type="text"
            value={textInput}
            hidden={true}
            onChange={(e) => handleOnChange(e.target.value)} />
        </form>
        <Grid word={newWord} revealResult={check} matrix={matrix} currentLine={indexRowMatrix} />
        <Keyboard keysUsed={listLetterUsed} onKeyPress={handleKeyPress} />
        {showCongrats && <Congrats onCloseCongrats={handleCongratsClose} />}
        {showFailure && <Failure onCloseFailure={handleFailureClose} />}
      </div>
    </main>
  );
}
