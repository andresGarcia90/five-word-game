'use client'
import { useState } from "react";
import { Line } from "./line";

type Props = {
    word: string,
    revealResult: boolean,
    currentLine: number,
    matrix: Array<Array<string>>
};

export default function Grid({word, revealResult: revealResult, currentLine, matrix}: Props) {
  const arrayCorrectWord = word.split("");
  
  return (
    <div className="grid grid-cols-1 gap-4">
        {matrix.map((line, index) => {

          const revealCurrent = (currentLine > index) || (revealResult && currentLine == index);
          return <Line key={`Line-${index}`} word={word} correctWord={arrayCorrectWord} currentWord={line} revealResult={revealCurrent}/>
        }
        )}
    </div>
    
  )
}
