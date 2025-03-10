"use client";

import { useState, useEffect } from "react";

export default function SettingsBar() {
  const [darkMode, setDarkMode] = useState(false);
  const [fontFamily, setFontFamily] = useState("Sans");

  const ArrowDownIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 text-purple-200 dark:text-purple-200"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );

  const SunIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-yellow-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.364 6.364l-.707-.707m12.728 0l-.707.707M6.364 17.636l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );

  const MoonIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );

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
        <button className="rounded-lg shadow-lg p-2 bg-blue-500 text-white">
          Historial
        </button>
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
