"use client";

import { FC, useState } from "react";
import { createContext } from "react";
import { Theme, ThemeContextType } from "@/types";

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>("light");

  return (
    <ThemeContext.Provider
      value={{ theme: currentTheme, setTheme: setCurrentTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
