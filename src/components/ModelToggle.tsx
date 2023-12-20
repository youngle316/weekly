"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex items-center justify-center">
      {theme === "light" ? (
        <Sun className="h-4 w-4" onClick={() => setTheme("dark")} />
      ) : (
        <Moon className="h-4 w-4" onClick={() => setTheme("light")} />
      )}
    </div>
  );
}
