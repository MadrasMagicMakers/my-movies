"use client";

import { useState, useEffect, useCallback } from "react";
import supabase from "@/config/supabaseClient";

type UseDarkModeReturnType = [boolean, () => void, Record<string, string>];

const colorPalette = {
  light: {
    primary: "primary-light",
    secondary: "secondary-light",
  },
  dark: {
    primary: "primary-dark",
    secondary: "secondary-dark",
  },
};

const useDarkMode = (): UseDarkModeReturnType => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [themeColors, setThemeColors] = useState<Record<string, string>>(
    colorPalette.light
  );

  const getTheme = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from("Theme-Provider")
        .select("themes")
        .limit(1)
        .single();
      if (data) {
        const { themes } = data;
        // const mode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setIsDarkMode(themes);
        setThemeColors(themes ? colorPalette.dark : colorPalette.light);
      }
    } catch (error) {
      console.error("Fetch failed", error);
    }
  }, []);

  useEffect(() => {
    getTheme();
  }, [getTheme]);

  const toggleDarkMode = (value: boolean) => {
    setIsDarkMode((prevMode) => !prevMode);
    setThemeColors(isDarkMode ? colorPalette.light : colorPalette.dark);
    updateTheme(value);
  };

  const updateTheme = async (value: boolean): Promise<void> => {
    try {
      const data = await supabase
        .from("Theme-Provider")
        .upsert([{ id: 1, themes: !value }])
        .limit(1)
        .single();
      getTheme();
    } catch (error) {
      console.error("Toggle failed", error);
    }
  };

  return [isDarkMode, toggleDarkMode, themeColors];
};

export default useDarkMode;
