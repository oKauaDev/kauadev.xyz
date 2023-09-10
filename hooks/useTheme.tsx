"use client";

import { themes } from "@/types/components/Navbar";
import isType from "@/utils/isType";
import React from "react";

export const useTheme = () => {
  function getDeviceTheme(): themes {
    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }

    return "light";
  }

  let themeSet: themes = getDeviceTheme();
  const localStorageTheme =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("theme")
      : "light";

  if (isType<themes>(localStorageTheme, "dark", "light")) {
    themeSet = localStorageTheme;
  }

  const [theme, setTheme] = React.useState<themes>(themeSet);

  function defineTheme(theme: themes) {
    if (theme === "dark") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  }

  function toggleTheme() {
    if (theme === "dark") {
      defineTheme("light");
    } else {
      defineTheme("dark");
    }
  }

  React.useEffect(() => {
    defineTheme(themeSet);
  }, [themeSet]);

  return {
    toggleTheme,
    value: themeSet,
  };
};
