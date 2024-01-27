"use client";

import { useContext } from "react";
import { ThemeContext } from "@/app/providers";
import { ThemeContextType } from "@/types";

export default function Button() {
  const { theme, setTheme } = useContext(ThemeContext) as ThemeContextType;

  const updateTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return <button onClick={updateTheme}>Theme Update</button>;
}
