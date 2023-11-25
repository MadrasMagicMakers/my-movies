// useDarkMode.tsx
"use client";
import { useEffect, useState } from 'react';

interface DarkModeHook {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const useDarkMode = (): DarkModeHook => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // This effect runs only once on mount
    // You can add any initialization logic here

    // Cleanup function for unmount
    return () => {
      // Add any cleanup logic here
    };
  }, []); // Empty dependency array ensures it runs only once

  useEffect(() => {
    // Apply the custom CSS variables based on the dark mode state
    const root = document.documentElement;
    root.style.setProperty('--body-colour', isDarkMode ? 'black' : 'white');
  }, [isDarkMode]);

  // Return the state and a function to toggle dark mode
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;
