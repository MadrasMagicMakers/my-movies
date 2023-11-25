"use client";

import { useState, useEffect, useCallback } from "react";
import supabase from "@/config/supabaseClient";

type ThemeColors = Record<string, string>;

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

type UseDarkModeReturnType = [boolean, () => void, ThemeColors];

const useDarkMode = (): UseDarkModeReturnType => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [themeColors, setThemeColors] = useState<ThemeColors>(
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

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    setThemeColors(isDarkMode ? colorPalette.light : colorPalette.dark);
    updateTheme(!isDarkMode);
  };

  const updateTheme = async (value: boolean): Promise<void> => {
    try {
      await supabase
        .from("Theme-Provider")
        .upsert([{ id: 1, themes: value }])
        .single();
      getTheme();
    } catch (error) {
      console.error("Toggle failed", error);
    }
  };

  return [isDarkMode, toggleDarkMode, themeColors];
};

export default useDarkMode;
