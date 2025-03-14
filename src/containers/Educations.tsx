"use client";

import { CardEducation } from "@/components/Card/CardEducation";
import { Typography } from "@/components/Typography";
import { education } from "@/lib/data";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";

export const Educations = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <div
      id="education"
      className="gap-10 flex flex-col items-center justify-center mt-40"
    >
      <Typography
        data-aos={"fade-up"}
        text={"h1"}
        className="relative text-center border-2 md:text-left bg-gradient-to-r from-yellow-500 to-yellow-500 via-yellow-300 text-transparent bg-clip-text hover:scale-105 !transition-all !duration-800 !ease-in-out"
      >
        <Image src={"/assets/arrow/arrow1.png"} alt={"arrow"} width={1000} height={1000} className="hidden md:block md:absolute w-[15rem] rotate-20 -right-[16rem] top-5"></Image>
        <Image src={"/assets/arrow/arrow1.png"} alt={"arrow"} width={1000} height={1000} className="hidden md:block md:absolute w-[15rem] scale-x-[-1] -rotate-20 -left-[16rem] top-5"></Image>
        Educations
      </Typography>
      <div className="flex gap-5 md:flex-row flex-col mt-[3rem]">
        {education.map((item, index) => (
          <CardEducation
            key={index}
            title={item.title}
            major={item.major}
            logo={item.logo}
            description={item.description}
            period={item.period}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};
