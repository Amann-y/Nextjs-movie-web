"use client";

import React from "react";
import { useTheme } from "next-themes";

const Darkmode = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currenttheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      {currenttheme === "dark" ? (
        <h4 onClick={() => setTheme("light")}>Light</h4>
      ) : (
        <h4 onClick={() => setTheme("dark")}>Dark</h4>
      )}
    </>
  );
};

export default Darkmode;
