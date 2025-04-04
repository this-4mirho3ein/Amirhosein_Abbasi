"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaHome, FaCode } from "react-icons/fa";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDarkTheme(theme === "dark");
  }, [theme]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto md:w-7/12 px-6 py-12">
          <div className="flex flex-col items-center text-center">
            {/* Glitch effect for 404 */}
            <div className="relative mb-8">
              <h1
                className={`text-9xl font-bold glitch-text ${
                  isDarkTheme ? "text-yellow-600" : "text-blue-600"
                }`}
                data-text="404"
              >
                404
              </h1>
              <style jsx global>{`
                .glitch-text {
                  position: relative;
                }
                .glitch-text::before,
                .glitch-text::after {
                  content: attr(data-text);
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                }
                .glitch-text::before {
                  left: 2px;
                  text-shadow: -2px 0 ${isDarkTheme ? "#ca8a04" : "#2563eb"};
                  clip: rect(44px, 450px, 56px, 0);
                  animation: glitch-anim 5s infinite linear alternate-reverse;
                }
                .glitch-text::after {
                  left: -2px;
                  text-shadow: -2px 0 ${isDarkTheme ? "#eab308" : "#3b82f6"};
                  clip: rect(44px, 450px, 56px, 0);
                  animation: glitch-anim2 5s infinite linear alternate-reverse;
                }
                @keyframes glitch-anim {
                  0% {
                    clip: rect(86px, 9999px, 86px, 0);
                  }
                  10% {
                    clip: rect(12px, 9999px, 69px, 0);
                  }
                  20% {
                    clip: rect(56px, 9999px, 59px, 0);
                  }
                  30% {
                    clip: rect(35px, 9999px, 23px, 0);
                  }
                  40% {
                    clip: rect(80px, 9999px, 32px, 0);
                  }
                  50% {
                    clip: rect(91px, 9999px, 60px, 0);
                  }
                  60% {
                    clip: rect(20px, 9999px, 79px, 0);
                  }
                  70% {
                    clip: rect(5px, 9999px, 96px, 0);
                  }
                  80% {
                    clip: rect(76px, 9999px, 46px, 0);
                  }
                  90% {
                    clip: rect(81px, 9999px, 94px, 0);
                  }
                  100% {
                    clip: rect(19px, 9999px, 67px, 0);
                  }
                }
                @keyframes glitch-anim2 {
                  0% {
                    clip: rect(22px, 9999px, 73px, 0);
                  }
                  10% {
                    clip: rect(67px, 9999px, 4px, 0);
                  }
                  20% {
                    clip: rect(54px, 9999px, 22px, 0);
                  }
                  30% {
                    clip: rect(35px, 9999px, 9px, 0);
                  }
                  40% {
                    clip: rect(65px, 9999px, 100px, 0);
                  }
                  50% {
                    clip: rect(16px, 9999px, 67px, 0);
                  }
                  60% {
                    clip: rect(7px, 9999px, 75px, 0);
                  }
                  70% {
                    clip: rect(53px, 9999px, 46px, 0);
                  }
                  80% {
                    clip: rect(91px, 9999px, 17px, 0);
                  }
                  90% {
                    clip: rect(84px, 9999px, 62px, 0);
                  }
                  100% {
                    clip: rect(92px, 9999px, 10px, 0);
                  }
                }
              `}</style>
            </div>

            <h2
              className={`text-2xl md:text-3xl font-bold mb-6 ${
                isDarkTheme ? "text-white" : "text-gray-800"
              }`}
            >
              Page Not Found
            </h2>

            <p
              className={`text-base md:text-lg max-w-md mb-10 ${
                isDarkTheme ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Oops! Looks like the page you are looking for doesnt exist or has
              been moved.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/"
                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  isDarkTheme
                    ? "bg-yellow-600 hover:bg-yellow-500 text-white"
                    : "bg-blue-800 hover:bg-blue-700 text-white"
                }`}
              >
                <FaHome />
                Back to Home
              </Link>

              <Link
                href="https://github.com/this-4mirho3ein"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  isDarkTheme
                    ? "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300"
                }`}
              >
                <FaCode />
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
