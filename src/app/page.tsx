"use client";
import { NextPage } from "next";
import * as React from "react";
import { useEffect } from "react";
import useDarkMode from "./theme";
import supabase from "@/config/supabaseClient";

const Home: NextPage = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode(supabase);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  console.log(isDarkMode, 'zuzuuz')

  return (
    <div className={`theme-container ${isDarkMode ? "dark-mode" : ""}`}>
      <h1>My App</h1>
      <p>Content goes here...</p>
      <button onClick={() => toggleDarkMode(isDarkMode)}>Toggle Dark Mode</button>
    </div>
  );
};

export default Home;
