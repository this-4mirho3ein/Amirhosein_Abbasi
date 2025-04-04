"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaBriefcase } from "react-icons/fa";
import { HiCalendar } from "react-icons/hi";

interface Experience {
  id: number;
  period: string;
  title: string;
  company: string;
  description: string;
  skills: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    period: "May 2024 ~ Aug 2024",
    title: "Front-End Developer",
    company: "Hantana",
    description:
      "In this site, the admin panel and user dashboard were designed using React, and then all authentication pages were refactored. We also worked to improve the site's performance using React hooks and DSA .",
    skills: [
      "React",
      "Tailwind",
      "ShadcnUI",
      "DSA",
      "Redux",
      "TypeScript",
    ],
  },
  {
    id: 2,
    period: "Feb 2025",
    title: "Front-End Developer",
    company: "Rental-Pulse",
    description:
      "In this site, which is a full-stack site and is in the real-state domain, I designed this site using React and Next. I used Typescript to comply with the type safety issue, and I used MongoDb, and Prisma to manage data, and finally I used Next-auth for the authentication section..",
    skills: ["Next.JS", "React.js", "TypeScript", "MongoDB", "Next-Auth" , 'Prisma'],
  },
  {
    id: 3,
    period: "Jan 2025",
    title: "Front-End Developer",
    company: "Meals-app",
    description:
      "This website, designed using Next.js, is a site for posting and viewing recipes for various foods.",
    skills: ["Next.JS", "React.JS", "TypeScript", "Server Actions"],
  },
  {
    id: 4,
    period: "Jan 2025",
    title: "Front-End Developer",
    company: "Portfolio",
    description:
      "I designed this site, which is a personal site, using next.js, but I also used Typescript and Framer for special motions.",
    skills: ["Next.JS", "TailwindCSS", "TypeScript", "Framer Motion"],
  },
];

const Experiences = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDarkTheme(theme === "dark");
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return <div className="h-32"></div>;
  }

  return (
    <div className="container mx-auto md:w-7/12 p-4 mt-12 mb-10 overflow-hidden">
      <div
        className={`flex items-center gap-2 mb-10 ${
          isDarkTheme ? "text-white" : "text-gray-800"
        } 
                   transition-all duration-700 transform ${
                     isVisible
                       ? "translate-y-0 opacity-100"
                       : "translate-y-4 opacity-0"
                   }`}
      >
        <FaBriefcase
          size={20}
          className={isDarkTheme ? "text-yellow-500" : "text-blue-500"}
        />
        <h1
          className={`text-xl font-bold ${
            isDarkTheme ? "text-white" : "text-gray-800"
          }`}
        >
          Experience
        </h1>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div
          className={`absolute left-3 top-0 bottom-0 w-[2px] ${
            isDarkTheme ? "bg-gray-700" : "bg-blue-200"
          }`}
        ></div>

        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`relative pl-10 mb-12 transition-all duration-700 transform
                      ${
                        isVisible
                          ? "translate-x-0 opacity-100"
                          : "translate-x-20 opacity-0"
                      }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            {/* Circle on the timeline */}
            <div
              className={`absolute left-[13px] top-0 w-3.5 h-3.5 rounded-full border transform -translate-x-1/2 ${
                isDarkTheme
                  ? "bg-gray-800 border-blue-500"
                  : "bg-white border-blue-500"
              } z-10`}
            ></div>

            {/* Date */}
            <div className="flex items-center mb-1.5">
              <HiCalendar
                className={
                  isDarkTheme ? "text-yellow-500 mr-2" : "text-blue-500 mr-2"
                }
              />
              <span
                className={`text-sm ${
                  isDarkTheme ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {exp.period}
              </span>
            </div>

            {/* Job Title and Company */}
            <div className="mb-2">
              <h3
                className={`text-lg font-bold ${
                  isDarkTheme ? "text-white" : "text-gray-800"
                }`}
              >
                {exp.company} ({exp.title})
              </h3>
            </div>

            {/* Description */}
            <p
              className={`mb-4 text-sm ${
                isDarkTheme ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {exp.description}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, i) => (
                <span
                  key={i}
                  className={`text-xs px-3 py-1 rounded-full ${
                    isDarkTheme
                      ? "bg-gray-800 text-gray-300 border border-gray-700"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
