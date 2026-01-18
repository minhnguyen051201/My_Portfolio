"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Sun, Moon } from "lucide-react";
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full border-2"
        onClick={handleClick}
      >
        <Sun
          strokeWidth={3}
          className="absolute h-10 w-10 rotate-0 scale-100 dark:rotate-90 dark:scale-0"
        ></Sun>
        <Moon
          strokeWidth={3}
          className="absolute h-10 w-10 rotate-90 scale-0 dark:rotate-0 dark:scale-100"
        ></Moon>
      </Button>
    </div>
  );
};

export default ThemeToggle;
