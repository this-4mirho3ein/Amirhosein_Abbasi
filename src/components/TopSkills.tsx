"use client";

import { BiLogoTypescript } from "react-icons/bi";
import { FaGit, FaReact } from "react-icons/fa";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiPrisma,
  SiRedux,
  SiShadcnui,
  SiTailwindcss,
  SiReactquery,
} from "react-icons/si";
import { HiTemplate } from "react-icons/hi";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import React from "react";
import { TbApi } from "react-icons/tb";
import { VscJson } from "react-icons/vsc";
import { HiCode } from "react-icons/hi";

type SkillLevel = "low" | "medium" | "advance";

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: SkillLevel;
  color: string;
  darkColor: string;
  url: string;
}

const myskills: Skill[] = [
  {
    name: "React",
    icon: <FaReact />,
    level: "medium",
    color: "#61DAFB",
    darkColor: "#61DAFB",
    url: "https://reactjs.org/",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    level: "medium",
    color: "#000000",
    darkColor: "#FFFFFF",
    url: "https://nextjs.org/",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    level: "advance",
    color: "#06B6D4",
    darkColor: "#06B6D4",
    url: "https://tailwindcss.com/",
  },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript />,
    level: "advance",
    color: "#F7DF1E",
    darkColor: "#F7DF1E",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "JS DS & Algorithms",
    icon: <HiCode />,
    level: "medium",
    color: "#E34F26",
    darkColor: "#F06529",
    url: "https://github.com/trekhleb/javascript-algorithms",
  },
  {
    name: "TypeScript",
    icon: <BiLogoTypescript />,
    level: "medium",
    color: "#3178C6",
    darkColor: "#3178C6",
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    level: "medium",
    color: "#47A248",
    darkColor: "#6CCA55",
    url: "https://www.mongodb.com/",
  },
  {
    name: "Redux",
    icon: <SiRedux />,
    level: "medium",
    color: "#764ABC",
    darkColor: "#764ABC",
    url: "https://redux.js.org/",
  },
  {
    name: "Zustand",
    icon: <SiRedux />,
    level: "medium",
    color: "#443E38",
    darkColor: "#ADA195",
    url: "https://github.com/pmndrs/zustand",
  },
  {
    name: "MUI",
    icon: <SiMui />,
    level: "advance",
    color: "#007FFF",
    darkColor: "#007FFF",
    url: "https://mui.com/",
  },
  {
    name: "ShadcnUI",
    icon: <SiShadcnui />,
    level: "advance",
    color: "#000000",
    darkColor: "#FFFFFF",
    url: "https://ui.shadcn.com/",
  },
  {
    name: "Tanstack Query",
    icon: <SiReactquery />,
    level: "medium",
    color: "#FF4154",
    darkColor: "#FF4154",
    url: "https://tanstack.com/query/latest",
  },
  {
    name: "Hero UI",
    icon: <HiTemplate />,
    level: "medium",
    color: "#6366F1",
    darkColor: "#818CF8",
    url: "https://heroicons.com/",
  },
  {
    name: "Prisma",
    icon: <SiPrisma />,
    level: "low",
    color: "#2D3748",
    darkColor: "#5A67D8",
    url: "https://www.prisma.io/",
  },
  {
    name: "Git",
    icon: <FaGit />,
    level: "medium",
    color: "#F05032",
    darkColor: "#F05032",
    url: "https://git-scm.com/",
  },
  {
    name: "Axios",
    icon: <TbApi />,
    level: "medium",
    color: "#5A29E4",
    darkColor: "#8E6CFF",
    url: "https://axios-http.com/",
  },
  {
    name: "Zod",
    icon: <VscJson />,
    level: "medium",
    color: "#3068B7",
    darkColor: "#4B8CEF",
    url: "https://zod.dev/",
  },
];

type LevelColorScheme = {
  bg: string;
  text: string;
  darkBg: string;
  darkText: string;
};

type LevelColors = {
  [key in SkillLevel]: LevelColorScheme;
};

const levelColors: LevelColors = {
  low: {
    bg: "#FEF3C7",
    text: "#92400E",
    darkBg: "#78350F",
    darkText: "#FEF3C7",
  },
  medium: {
    bg: "#DBEAFE",
    text: "#1E40AF",
    darkBg: "#1E3A8A",
    darkText: "#DBEAFE",
  },
  advance: {
    bg: "#DCFCE7",
    text: "#166534",
    darkBg: "#166534",
    darkText: "#DCFCE7",
  },
};

const TopSkills = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDarkTheme(theme === "dark");
  }, [theme]);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return <div className="h-32"></div>;
  }

  return (
    <div className="container mx-auto md:w-7/12 p-4 mt-10 mb-6 overflow-hidden">
      <div
        className={`flex items-center justify-start gap-2 mb-4 ${
          isDarkTheme ? "text-white" : "text-gray-800"
        } transition-all duration-700 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <HiOutlineRocketLaunch
          size={20}
          className={`${
            isDarkTheme ? "text-[#4D6DFF]" : "text-blue-500"
          } animate-pulse`}
        />
        <h1
          className={`text-xl font-bold ${
            isDarkTheme ? "text-white" : "text-gray-800"
          }`}
        >
          Top Skills
        </h1>
      </div>
      <section className="flex gap-2 flex-wrap mt-10">
        {myskills.map((skill, index) => (
          <Link
            className={`
              flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all 
              hover:scale-105 shadow-sm duration-700 transform
              ${
                isDarkTheme
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-gray-100 hover:bg-gray-200"
              }
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }
            `}
            style={{
              borderLeft: `3px solid ${
                isDarkTheme ? skill.darkColor : skill.color
              }`,
              transitionDelay: `${index * 50}ms`,
            }}
            href={skill.url}
            key={skill.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span
              className="text-base transition-transform duration-300 hover:rotate-12"
              style={{ color: isDarkTheme ? skill.darkColor : skill.color }}
            >
              {skill.icon}
            </span>
            <h3
              className={`text-sm font-medium ${
                isDarkTheme ? "text-white" : "text-gray-800"
              }`}
            >
              {skill.name}
            </h3>
            <span
              className="text-xs px-1.5 py-0.5 rounded-full"
              style={{
                backgroundColor: isDarkTheme
                  ? levelColors[skill.level].darkBg
                  : levelColors[skill.level].bg,
                color: isDarkTheme
                  ? levelColors[skill.level].darkText
                  : levelColors[skill.level].text,
              }}
            >
              {skill.level}
            </span>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default TopSkills;
