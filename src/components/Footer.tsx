"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTelegram, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDarkTheme(theme === "dark");

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [theme]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!mounted) {
    return <div className="h-20"></div>;
  }

  return (
    <footer
      className={`mt-20 py-8 border-t ${
        isDarkTheme
          ? "bg-gray-900 border-gray-800"
          : "bg-gray-50 border-gray-200"
      }`}
    >
      <div className="container mx-auto md:w-7/12 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Scroll to top button */}
          <div className="order-2 md:order-1">
            <button
              onClick={scrollToTop}
              className={`
                relative overflow-hidden group rounded-full p-3
                ${
                  isDarkTheme
                    ? "bg-[#4D6DFF] hover:bg-[#5C7CFF] text-white"
                    : "bg-blue-800 hover:bg-blue-700 text-white"
                }
                transition-all duration-300 transform
                ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
              `}
            >
              <FaArrowUp className="text-lg transition-transform duration-300 group-hover:-translate-y-1" />
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaArrowUp className="text-lg animate-bounce" />
              </span>
            </button>
          </div>

          {/* Center: Tagline and social links */}
          <div className="order-1 md:order-2 text-center flex flex-col items-center gap-4">
            <p
              className={`text-sm md:text-base max-w-md ${
                isDarkTheme ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Passionate about building outstanding websites using the latest
              web technologies.
            </p>

            <div className="flex items-center gap-4 mt-2">
              <Link
                href="https://github.com/this-4mirho3ein"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${
                  isDarkTheme
                    ? "text-gray-300 hover:text-white hover:bg-gray-800"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                }`}
              >
                <FaGithub size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/amirhosein-abbasi-7885ab35a/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${
                  isDarkTheme
                    ? "text-gray-300 hover:text-white hover:bg-gray-800"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                }`}
              >
                <FaLinkedin size={20} />
              </Link>
              <Link
                href="https://t.me/mr_amab"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${
                  isDarkTheme
                    ? "text-gray-300 hover:text-white hover:bg-gray-800"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                }`}
              >
                <FaTelegram size={20} />
              </Link>
            </div>
          </div>

          {/* Right: Logo */}
          <div className="order-3 md:order-3">
            <Link href="/">
              <div
                className={`text-xl font-bold ${
                  isDarkTheme ? "text-[#4D6DFF]" : "text-blue-500"
                }`}
              >
                {"<Amirhosein/>"}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
