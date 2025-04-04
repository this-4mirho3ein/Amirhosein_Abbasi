"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const isDarkTheme = theme === "dark";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={`border-0 focus:border-0 focus:ring-0 focus:outline-none ring-0 ${
            isDarkTheme ? "hover:bg-slate-700" : "hover:bg-slate-200"
          }`}
          size="icon"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className={
          isDarkTheme
            ? "bg-slate-800 border-1 border-slate-700 "
            : "bg-white border-1 border-slate-200"
        }
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={
            isDarkTheme
              ? "hover:bg-slate-700 cursor-pointer text-white focus:outline-none"
              : "hover:bg-gray-200 cursor-pointer focus:outline-none"
          }
        >
          Light
        </DropdownMenuItem>
        <hr className={isDarkTheme ? "text-gray-700" : "text-gray-400"} />
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={
            isDarkTheme
              ? "hover:bg-slate-700 cursor-pointer text-white focus:outline-none"
              : "hover:bg-gray-200 cursor-pointer focus:outline-none"
          }
        >
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
