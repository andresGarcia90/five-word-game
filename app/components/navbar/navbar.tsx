'use client';
import { HiLightBulb } from "react-icons/hi";
import { HiOutlineMoon } from "react-icons/hi";
import { HiOutlineInformationCircle } from "react-icons/hi";

import { useState } from "react";

export default function Navbar() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const toggleTheme = () => {
    if (!isDarkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setIsDarkTheme(!isDarkTheme);
  }
  return (
    <div className="bg-white dark:bg-slate-800 block">
      <div className="flex justify-between px-5 py-2">
        <HiOutlineInformationCircle className="dark:text-white text-xl" />
        <h1 className="dark:text-white text-xl">
          Five Letter puzzle
        </h1>
        <button className="" 
          onClick={toggleTheme}>
          {isDarkTheme && <HiOutlineMoon className="dark:text-white text-xl"/>}
          {!isDarkTheme && <HiLightBulb className="text-xl"/>}
        </button>
      </div>
    </div>
  )
}