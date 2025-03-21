"use client";

import { Button } from "@/components/Button/Button";
import { Photo } from "@/components/Photo";
import { Typography } from "@/components/Typography";
import { MdDownload } from "react-icons/md";
import { Dancing_Script } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "400" });

export const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <div
      id="about"
      className="gap-10 mt-8 flex flex-col items-center justify-center md:flex-row md:gap-15"
    >
      <div className="relative z-0 flex flex-col gap-7 justify-center items-center md:items-start p-2 max-w-[35rem]">
        {/* Background Grid */}
        <div className="hidden md:block md:absolute -z-20 md:w-[25rem] md:h-[25rem] top-[-9rem] left-[-9rem]">
          <Image
            src={"/assets/grid/grid1.png"}
            alt="grid"
            width={1000}
            height={1000}
            draggable={false} 
            priority={true}
            className="w-full h-full object-cover rounded-full opacity-30 pointer-events-none select-none"
          />
        </div>

        {/* Foreground Content */}
        <div className="hidden md:block md:absolute z-10 bg-radial from-transparent via-[#171717] via-70% to-[#171717] p-4 w-[25rem] h-[25rem] top-[-9rem] left-[-9rem]"></div>

        <Typography
          data-aos={"fade-right"}
          data-aos-duration="1000"
          text={"h1"}
          className="text-center md:text-left hover:scale-105 !transition-all !duration-800 !ease-in-out relative z-20"
        >
          About{" "}
          <span
            className={`${dancingScript.className} bg-gradient-to-r from-yellow-500 to-yellow-500 via-yellow-400 text-transparent bg-clip-text`}
          >
            Me
          </span>
        </Typography>

        <Photo data-aos={"fade-left"} className="md:hidden flex ml-6 mt-12" />

        <Typography
          data-aos={"fade-right"}
          text={"body"}
          className="md:text-justify text-center w-full md:mr-9 opacity-80 relative z-20"
        >
          I am a second-year student with a passion for challenges and
          continuous learning. I am actively improving my skills in informatics,
          particularly in{" "}
          <span className="text-yellow-500 font-semibold">data analysis</span>{" "}
          and{" "}
          <span className="text-yellow-500 font-semibold">web development</span>{" "}
          , while also gaining insights into{" "}
          <span className="text-yellow-500 font-semibold">business</span>.
          Through my involvement in organizations and committees, I have
          developed leadership, administration, and time management skills. I am
          eager to contribute to community activities and further enhance my
          abilities.
        </Typography>

        <div
          data-aos={"fade-up"}
          className="flex justify-center md:justify-end w-full relative z-20"
        >
          <Button
            className="flex items-center gap-2"
            onClick={() => window.open("CV_12-3-25.pdf")}
          >
            <MdDownload className="text-xl" /> Download CV
          </Button>
        </div>
      </div>

      <Photo data-aos={"fade-left"} className="hidden md:block" />
    </div>
  );
};
