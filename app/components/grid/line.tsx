'use client';

import Cell from "./cell"

type Props = {
  word: string,
  correctWord: Array<string>,
  currentWord: Array<string>,
  revealResult: boolean
}

export const Line = ({ word, correctWord, currentWord, revealResult }: Props) => {
  const currentProcess: any[] = [];
  correctWord.forEach((letter, index) => {
    const currentLetter = currentWord[index];
    let valueCorrect = 'free';
    if (revealResult) {
      if (letter == currentLetter) {
        valueCorrect = 'correct';
      } else {
        valueCorrect = word.includes( currentLetter) ? 'incorrect' : 'error'
      }
    }


    currentProcess.push({
      value: currentWord[index],
      isEditable: !revealResult,
      status: valueCorrect,
      position: index
    })
  });


  return (
    <div className="flex justify-center align-center">
      {currentProcess.map((letter, index) =>
        <Cell key={`cell_${index}`} value={letter.value} position={index} isEditable={letter.isEditable} status={letter.status} />)}
    </div>
  )
}
