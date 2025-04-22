"use client";

import { MdOutlinePhone } from "react-icons/md";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ModeToggle } from "./ui/ModeToggle";

const Header = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // This useEffect ensures that the component only renders with theme detection on the client
  useEffect(() => {
    setMounted(true);
    setIsDarkTheme(theme === "dark");
  }, [theme]);

  // Prevent hydration errors by only rendering theme-dependent elements after mounting
  if (!mounted) {
    return (
      <div className="navbar bg-base-100 shadow-sm flex shadow-gray-300 px-4 py-3">
        <nav className="flex justify-between items-center container mx-auto w-7/12">
          <div className="flex-1">
            <Link href={`/`} className="btn btn-ghost text-blue-500 text-2xl">
              {"<Amirhosein/>"}
            </Link>
          </div>
          <div className="flex gap-2">
            {/* Placeholders with neutral styling */}
            <div className="w-9 h-9"></div>
            <div className="px-3 py-2 rounded-md"></div>
            <div className="px-3 py-2 rounded-md"></div>
          </div>
        </nav>
      </div>
    );
  }

  return (
    <div
      className={`navbar bg-base-100 shadow-sm flex shadow-gray-300 px-4 py-3 relative z-50 ${
        isDarkTheme ? "shadow-gray-800" : "shadow-gray-300"
      }`}
    >
      <nav className="flex justify-between items-center container mx-auto md:w-7/12">
        <div className="flex-1">
          <Link
            href={`/`}
            className={`btn btn-ghost ${
              isDarkTheme ? "text-[#4D6DFF]" : "text-blue-500"
            } text-2xl `}
          >
            {"<Amirhosein/>"}
          </Link>
        </div>
        <div className="flex gap-2">
          <ModeToggle />
          {/*
           <DropdownMenu>
            <DropdownMenuTrigger
              className={`px-3 py-2 rounded-md relative focus:outline-none focus:ring-0 focus:border-0 ${
                isDarkTheme
                  ? "hover:bg-slate-700 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              <MdOutlineGTranslate />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              sideOffset={5}
              align="end"
              className={`flex flex-col p-3 rounded-md gap-2 pr-10 shadow-md w-max ${
                isDarkTheme
                  ? "bg-slate-800 border-1 border-slate-700 text-white"
                  : "bg-white border-1 border-slate-200"
              }`}
            >
              <DropdownMenuLabel
                className={`font-semibold text-md w-fit ${
                  isDarkTheme ? "text-white" : ""
                }`}
              >
                Select Your Language
              </DropdownMenuLabel>
              <hr
                className={isDarkTheme ? "text-gray-700" : "text-slate-300"}
              />
              <DropdownMenuSeparator />
              <div
                className={`flex flex-col items-start gap-2 ${
                  isDarkTheme ? "text-slate-300" : "text-slate-600"
                }`}
              >
                <section
                  className={`flex items-center hover:cursor-pointer px-2 py-1 rounded w-full ${
                    isDarkTheme ? "hover:bg-slate-700" : "hover:bg-gray-200"
                  }`}
                >
                  <Image
                    src={Ir}
                    width={20}
                    height={20}
                    alt="Iran Flag"
                    className="mr-2"
                  />
                  <h3>Persian</h3>
                </section>
                <section
                  className={`flex items-center hover:cursor-pointer px-2 py-1 rounded w-full ${
                    isDarkTheme ? "hover:bg-slate-700" : "hover:bg-gray-200"
                  }`}
                >
                  <Image
                    src={uk}
                    width={20}
                    height={20}
                    alt="UK Flag"
                    className="mr-2"
                  />
                  <h3>English</h3>
                </section>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          */}

          <DropdownMenu>
            <DropdownMenuTrigger
              className={`px-3 py-2 rounded-md relative focus:outline-none focus:ring-0 focus:border-0 ${
                isDarkTheme
                  ? "hover:bg-slate-700 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              <MdOutlinePhone />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              sideOffset={5}
              align="end"
              className={`flex flex-col p-3 rounded-md gap-2 pr-10 shadow-md w-max ${
                isDarkTheme
                  ? "bg-slate-800 border-1 border-slate-700"
                  : "bg-white border-1 border-slate-200"
              }`}
            >
              <DropdownMenuLabel
                className={`font-semibold text-md ${
                  isDarkTheme ? "text-white" : ""
                }`}
              >
                Contact Me
              </DropdownMenuLabel>
              <hr
                className={isDarkTheme ? "text-gray-700" : "text-slate-300"}
              />
              <DropdownMenuSeparator />
              <div
                className={`flex flex-col items-start gap-4 mt-2 ${
                  isDarkTheme ? "text-slate-300" : "text-slate-600"
                }`}
              >
                <section className="phone flex items-center gap-3">
                  <MdOutlinePhone />
                  +98-9142347137{" "}
                </section>
                <section className="email flex items-center gap-3">
                  <CiMail /> amirhosein.nextdev@gmail.com
                </section>
                <h2
                  className={`text-md font-semibold mt-3 ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  Social Links
                </h2>
                <section className="flex items-center gap-2">
                  <Link
                    href={`https://github.com/this-4mirho3ein`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`py-2 px-6 hover:cursor flex items-center w-fit gap-2 rounded-md focus:outline-none focus:ring-0 ${
                      isDarkTheme
                        ? "border-1 border-slate-600 hover:bg-slate-700"
                        : "border-1 border-slate-300 hover:bg-gray-200"
                    }`}
                  >
                    <FaGithub /> Github
                  </Link>
                  <Link
                    href={`https://www.linkedin.com/in/amirhosein-abbasi-7885ab35a/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`py-2 px-6 hover:cursor flex items-center w-fit gap-2 rounded-md focus:outline-none focus:ring-0  ${
                      isDarkTheme
                        ? "border-1 border-slate-600 hover:bg-slate-700"
                        : "border-1 border-slate-300 hover:bg-gray-200"
                    }`}
                  >
                    <FaLinkedin />
                    Linkedin
                  </Link>
                </section>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </div>
  );
};

export default Header;
