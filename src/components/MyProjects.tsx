"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { HiOutlineBriefcase } from "react-icons/hi";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  role: string;
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Rental-Pulse",
    description:
      "The Future of Real-State Shopping, Powered by Next.js and Tailwind CSS",
    technologies: [
      "Next.JS",
      "TailwindCSS",
      "TypeScript",
      "MongoDB",
      "Prisma",
      "Next-Auth",
    ],
    role: "Next.JS Developer",
    githubUrl: "https://github.com/this-4mirho3ein/Rental-Pulse",
    liveUrl: "https://rental-pulse-beta.vercel.app/",
  },
  {
    id: 2,
    title: "Ecommerce-website",
    description:
      "This is a Ecommerce website in persian language that I use Json server for my data and use redux and axios for data managment and data fetching",
    technologies: [
      "Next.JS",
      "TailwindCSS",
      "TypeScript",
      "Json server",
      "Axios",
      "Redux",
      "jwt",
    ],
    role: "Next.JS Developer",
    githubUrl: "https://github.com/this-4mirho3ein/ecommerce/",
  },
  {
    id: 3,
    title: "Meals",
    description: "A platform for sharing Food recipes",
    technologies: ["React.JS", "Next.JS", "Typescript"],
    role: "Front-End Developer",
    githubUrl: "https://github.com/this-4mirho3ein/Meals-app",
    liveUrl: "https://meals-app-plum.vercel.app/",
  },
  {
    id: 4,
    title: "News-Pj",
    description: "See and add News and explore them .",
    technologies: ["Next.JS", "React.js", "TypeScript"],
    role: "Front-End Developer",
    githubUrl: "https://github.com/this-4mirho3ein/News",
    liveUrl: "https://news-eosin-mu.vercel.app/",
  },
  {
    id: 5,
    title: "Personal-Portfolio",
    description: "Personal Portfolio to present yourself and show your skills",
    technologies: ["Next.js", "React.JS", "TailwindCSS", "TypeScript"],
    role: "Front-End Developer",
    githubUrl: "https://github.com/this-4mirho3ein/personal-portfolio",
    liveUrl: "https://amirhosein-devportfolio.vercel.app/",
  },
  {
    id: 6,
    title: "Music Player",
    description: "Find Music from all over the world",
    technologies: ["Next.js", "React.JS", "TailwindCSS", "TypeScript"],
    role: "Front-End Developer",
    githubUrl: "https://github.com/yourusername/imagica",
  },
  {
    id: 7,
    title: "Moovito",
    description: "A web application for TMDB movie information",
    technologies: ["Next.js", "React.JS", "TailwindCSS"],
    role: "Front-End Developer",
    githubUrl: "https://github.com/this-4mirho3ein/Movie-app",
  },
  {
    id: 8,
    title: "Todo",
    description: "Todo app for handling your works",
    technologies: ["Next.JS", "Typescript", "TypeScript"],
    role: "Front-End Developer",
    githubUrl: "https://github.com/this-4mirho3ein/Todo",
  },
];

const getTechColor = (tech: string, isDark: boolean): string => {
  const colors: { [key: string]: { light: string; dark: string } } = {
    "Next.JS": { light: "#000000", dark: "#FFFFFF" },
    "React.JS": { light: "#61DAFB", dark: "#61DAFB" },
    TailwindCSS: { light: "#06B6D4", dark: "#06B6D4" },
    TypeScript: { light: "#3178C6", dark: "#3178C6" },
    Prisma: { light: "#2D3748", dark: "#5A67D8" },
    PostgreSQL: { light: "#336791", dark: "#4A90E2" },
    MySQL: { light: "#4479A1", dark: "#67A3D9" },
    "Express.JS": { light: "#000000", dark: "#FFFFFF" },
    "Hono.JS": { light: "#5865F2", dark: "#7289DA" },
    DrizzleORM: { light: "#FF4F00", dark: "#FF7B3A" },
    "@tanstack/query": { light: "#FF4154", dark: "#FF6B7D" },
    Api: { light: "#5A29E4", dark: "#8E6CFF" },
  };

  return colors[tech]
    ? isDark
      ? colors[tech].dark
      : colors[tech].light
    : isDark
    ? "#FFFFFF"
    : "#000000";
};

const MyProjects = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [showAllProjects, setShowAllProjects] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDarkTheme(theme === "dark");
  }, [theme]);

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length));
    if (visibleProjects + 3 >= projects.length) {
      setShowAllProjects(true);
    }
  };

  if (!mounted) {
    return <div className="h-32"></div>;
  }

  return (
    <div className="container mx-auto md:w-7/12 p-4 mt-12 mb-10">
      <div
        className={`flex items-center gap-2 mb-8 ${
          isDarkTheme ? "text-white" : "text-gray-800"
        }`}
      >
        <HiOutlineBriefcase
          size={20}
          className={isDarkTheme ? "text-yellow-500" : "text-blue-500"}
        />
        <h1
          className={`text-xl font-bold ${
            isDarkTheme ? "text-white" : "text-gray-800"
          }`}
        >
          My Projects
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.slice(0, visibleProjects).map((project) => (
          <div
            key={project.id}
            className={`border rounded-lg overflow-hidden
                      ${
                        isDarkTheme
                          ? "bg-gray-800/80 border-gray-700 hover:border-yellow-700/70"
                          : "bg-white/90 border-gray-200 hover:border-blue-400/70"
                      } 
                      hover:shadow-xl backdrop-blur-sm`}
          >
            <div className="p-5">
              <div className="flex justify-between items-start mb-3">
                <h3
                  className={`text-lg font-bold ${
                    isDarkTheme ? "text-white" : "text-gray-800"
                  }`}
                >
                  {project.title}
                </h3>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    isDarkTheme
                      ? "bg-yellow-600/20 text-yellow-400"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {project.role}
                </span>
              </div>
              <p
                className={`text-sm mb-4 ${
                  isDarkTheme ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: isDarkTheme
                        ? "rgba(55, 65, 81, 0.8)"
                        : "rgba(243, 244, 246, 0.8)",
                      color: getTechColor(tech, isDarkTheme),
                      border: `1px solid ${getTechColor(tech, isDarkTheme)}`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-2 mt-5">
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1 text-xs py-1.5 px-3 rounded-md
                            ${
                              isDarkTheme
                                ? "bg-gray-700 hover:bg-gray-600 text-white"
                                : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                            }`}
                >
                  <FaGithub size={14} />
                  GitHub
                </Link>

                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1 text-xs py-1.5 px-3 rounded-md
                              ${
                                isDarkTheme
                                  ? "bg-blue-800 hover:bg-blue-700 text-white"
                                  : "bg-blue-800 hover:bg-blue-700 text-white"
                              }`}
                  >
                    <FaExternalLinkAlt size={12} />
                    Live Demo
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleProjects < projects.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMore}
            className={`flex items-center gap-2 py-2.5 px-5 rounded-lg font-medium shadow-sm
                      ${
                        isDarkTheme
                          ? "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700"
                          : "bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 shadow-slate-200/50"
                      }`}
          >
            <span>More Projects</span>
          </button>
        </div>
      )}

      {showAllProjects && (
        <div className="flex justify-center mt-8">
          <Link
            href="https://github.com/this-4mirho3ein"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 py-2.5 px-5 rounded-lg font-medium shadow-sm
                      ${
                        isDarkTheme
                          ? "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700"
                          : "bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 shadow-slate-200/50"
                      }`}
          >
            <FaGithub size={16} />
            <span>Explore GitHub</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyProjects;
