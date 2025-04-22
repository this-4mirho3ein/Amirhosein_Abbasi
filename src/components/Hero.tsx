"use client";

import Image from "next/image";
import MyImage from "../../public/images/MyImage.jpg";
import { Button } from "./ui/button";
import { FaDownload } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";

const Hero = () => {
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
    return <div className="h-screen"></div>;
  }

  return (
    <div className="container mx-auto md:w-7/12 p-4 mt-15 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <section
          className={`Info flex flex-col max-w-lg gap-3 transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-20 opacity-0"
          }`}
        >
          <h1
            className={`text-4xl font-bold ${
              isDarkTheme ? "text-gray-50" : "text-gray-950"
            } transition-all duration-700 ease-in-out transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            Amirhosein Abbasi
          </h1>
          <p
            className={`text-md font-semibold ${
              isDarkTheme ? "text-gray-300" : "text-gray-800"
            } transition-all duration-700 delay-100 ease-in-out transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            Programmer and Frontend Developre
          </p>
          <p
            className={`text-md w- ${
              isDarkTheme ? "text-gray-400" : "text-gray-600"
            } transition-all duration-700 delay-200 ease-in-out transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            Front-End web developer focused on React and Next.js, creating fast,
            user-friendly digital experiences. Skilled in everything from
            server-side architecture to UI design, aiming to deliver optimized
            and modern solutions.
          </p>
          <Link
            href="/Amirhosein_Abbasi_Resume.pdf"
            download
            target="_blank"
            className="max-w-fit"
          >
            <Button
              className={`${
                isDarkTheme
                  ? "bg-[#4D6DFF] hover:bg-[#5C7CFF]"
                  : "bg-blue-800 hover:bg-blue-600"
              } rounded-xl px-4 py-5 cursor-pointer text-white max-w-fit flex items-center gap-2  hover:shadow-lg  ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <FaDownload className="animate-bounce" />
              Get Resume
            </Button>
          </Link>
        </section>
        <section
          className={`image mt-10 md:mt-0 transition-all duration-1000 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
          }`}
        >
          <div className="relative">
            <div
              className={`absolute inset-0 rounded-full ${
                isDarkTheme ? "bg-[#4D6DFF]/10" : "bg-blue-500/10"
              } blur-xl transform scale-90 animate-pulse`}
            ></div>
            <div
              className={`${
                isDarkTheme
                  ? "shadow-[0_0_15px_rgba(202,138,4,0.3)]"
                  : "shadow-[0_0_15px_rgba(37,99,235,0.3)]"
              } rounded-full transition-all duration-500`}
            >
              <Image
                src={MyImage}
                alt="My Personal Image"
                className={`rounded-full relative transition-all duration-500 hover:scale-105 transform -z-0 ${
                  isDarkTheme ? "ring-2 ring-gray-700 shadow-md" : "shadow-md"
                } ${
                  isDarkTheme ? "shadow-[#3F5BF5]/20" : "shadow-blue-700/20"
                }`}
                width={320}
                height={320}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
