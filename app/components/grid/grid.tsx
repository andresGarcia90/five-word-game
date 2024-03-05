'use client'
import { Line } from "./line";
import { Cell } from "@/app/lib/definitions";

type Props = {
    word: string,
    revealResult: boolean,
    currentLine: number,
    matrix: Array<Array<Cell>>
};

export default function Grid({word, revealResult: revealResult, currentLine, matrix}: Props) {
  const arrayCorrectWord = word.split("");
  
  return (
    <div className="grid grid-cols-1 gap-4">
        {matrix.map((line, index) => {

          const revealCurrent = (currentLine > index) || (revealResult && currentLine == index);
          return <Line key={`Line-${index}`} word={word} currentWord={line} revealResult={revealCurrent}/>
        }
        )}
    </div>
    
  )
}
