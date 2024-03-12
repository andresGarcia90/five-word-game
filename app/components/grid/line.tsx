'use client';

import { Cell } from "@/app/lib/definitions";
import CellUI from "./cell"

type Props = {
  word: string,
  currentWord: Array<Cell>,
  revealResult: boolean,
  isEditable: boolean
}

export const Line = ({ currentWord, revealResult, isEditable = false }: Props) => {

  return (
    <div className="flex justify-center align-center">
      {currentWord.map((letter, index) =>
        <CellUI key={`cell_${index}`} value={letter.value} position={index} isEditable={isEditable} status={letter.status}  reveal={revealResult}/>)}
    </div>
  )
}
