"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export const LeetCodeStats = () => {
  const [solvedCount, setSolvedCount] = useState("around 150");

  useEffect(() => {
    const controller = new AbortController();

    const fetchLeetCodeStats = async () => {
      try {
        const response = await fetch(
          "https://leetcode-stats-api.herokuapp.com/skirrrrrra",
          { signal: controller.signal }
        );

        if (!response.ok) {
          return;
        }

        const data = await response.json();
        if (controller.signal.aborted) return;

        if (data.status === "success") {
          setSolvedCount(data.totalSolved.toString());
        }
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }
      }
    };

    fetchLeetCodeStats();

    return () => {
      if (!controller.signal.aborted) {
        controller.abort();
      }
    };
  }, []);

  return <span>{solvedCount}</span>;
};

export function PortfolioClientControls() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="absolute right-0 top-0"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
