'use client';

import { Cell } from "@/app/lib/definitions";
import CellUI from "./cell"

type Props = {
  word: string,
  currentWord: Array<Cell>,
  revealResult: boolean
}

export const Line = ({ currentWord }: Props) => {

  return (
    <div className="flex justify-center align-center">
      {currentWord.map((letter, index) =>
        <CellUI key={`cell_${index}`} value={letter.value} position={index} isEditable={letter.isEditable} status={letter.status} />)}
    </div>
  )
}
