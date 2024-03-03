'use client'
import { useState } from "react";
import { Line } from "./line";

type Props = {
    word: string,
    revealResult: boolean,
    matrix: Array<Array<string>>
};

export default function Grid({word, revealResult: revealResult, matrix}: Props) {
  const [currentLine, setCurrentLine] = useState(0);
  const arrayCorrectWord = word.split("");
  if ( revealResult ) {
    setCurrentLine(currentLine + 1)
  }
    
  return (
    <div className="grid grid-cols-1 gap-4">
        {matrix.map((line, index) => {
          const revealCurrent = currentLine == index;
          return <Line key={`Line-${index}`} word={word} correctWord={arrayCorrectWord} currentWord={line} revealResult={revealCurrent}/>
        }
        )}
    </div>
    
  )
}
