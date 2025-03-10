"use client";

import { useState, useEffect } from "react";
import BookIcon from "@/app/icons/BookIcon";
import ArrowDownIcon from "@/app/icons/ArrowDownIcon";
import SunIcon from "@/app/icons/SunIcon";
import MoonIcon from "@/app/icons/MoonIcon";

export default function SettingsBar() {
  const [darkMode, setDarkMode] = useState(false);
  const [fontFamily, setFontFamily] = useState("Sans");

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", String(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    document.body.classList.remove("font-sans", "font-serif", "font-mono");
    document.body.classList.add(`font-${fontFamily.toLowerCase()}`);
  }, [fontFamily]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleFontChange = (event: any) => {
    setFontFamily(event.target.value);
  };

  return (
    <div className="flex items-center justify-between w-full max-w-2xl mx-auto">
      <div>
        <BookIcon />
      </div>
      <div className="flex items-center justify-center">
        <div className="relative">
          <select
            value={fontFamily}
            onChange={handleFontChange}
            className="appearance-none bg-transparent border-none outline-none text-black dark:text-gray-300 pr-6 font-bold" // Agrega padding derecho para la flecha
          >
            <option value="Sans">Sans</option>
            <option value="Serif">Serif</option>
            <option value="Mono">Mono</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
            <ArrowDownIcon />
          </div>
        </div>
        <div className="border-l border-gray-200 h-6 mx-3"></div>
        <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
          <input
            type="checkbox"
            name="toggle"
            id="toggle"
            className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white appearance-none cursor-pointer top-1"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <label
            htmlFor="toggle"
            className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
          ></label>
        </div>
        {darkMode ? <SunIcon /> : <MoonIcon />}
      </div>
    </div>
  );
}
