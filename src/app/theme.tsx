// useDarkMode.tsx
"use client";
import { useEffect, useId, useState, useCallback } from "react";
import { SupabaseClient } from "@supabase/supabase-js";

interface DarkModeHook {
  isDarkMode: boolean;
  toggleDarkMode: (val: boolean) => void; // Update the type here
}

const useDarkMode = (supabase: SupabaseClient): DarkModeHook => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Apply the custom CSS variables based on the dark mode state
    const root = document.documentElement;
    root.style.setProperty("--body-colour", isDarkMode ? "black" : "white");
  }, [isDarkMode]);

  const fetchDarkMode = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from("Theme-Provider")
        .select("themes")
        .limit(1)
        .single();
      if (data) {
        console.log(data, "zmmode");
        setIsDarkMode(data?.themes);
      }
    } catch (error) {
      console.error("Fetch failed", error);
    }
  }, []);

  useEffect(() => {
    fetchDarkMode();
  }, [fetchDarkMode]);

  const toggleDarkMode = async (val: boolean) => {
    setIsDarkMode(!isDarkMode);
    try {
      const { data, error } = await supabase
        .from("Theme-Provider")
        .upsert([{ id: 1, themes: !val }])
        .limit(1)
        .single();

      if (data) {
        fetchDarkMode();
      }

      if (error) {
        throw error;
      }
      // You can handle the response as needed
    } catch (error) {
      console.error("Toggle failed", error);
      // Handle error
    }
  };

  return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;
