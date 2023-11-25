"use client";
import { NextPage } from "next";
import * as React from "react";
import { useEffect } from "react";
import useDarkMode from "./theme";

const Home: NextPage = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={`theme-container ${isDarkMode ? "dark-mode" : ""}`}>
      <h1>My App</h1>
      <p>Content goes here...</p>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
};

export default Home;
