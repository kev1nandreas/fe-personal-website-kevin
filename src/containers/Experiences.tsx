"use client";

import { CardExperience } from "@/components/Card/CardExperience";
import { Typography } from "@/components/Typography";
import { experiences } from "@/lib/data";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Experiences = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <div
      id="experiences"
      className="flex flex-col justify-center items-center mt-40 text-left"
    >
      <Typography
        data-aos={"fade-up"}
        text={"h1"}
        className="relative text-center md:text-left pb-5 md:px-5 w-fit px-3 mb-20 bg-gradient-to-r from-yellow-500 to-yellow-500 via-yellow-300 text-transparent bg-clip-text hover:scale-105 !transition-all !duration-800 !ease-in-out"
      >
        <span className="text-white">Featured </span>
        Experiences
      </Typography>

      <div className="flex flex-col gap-7">
        {experiences.map((exp, index) => (
          <CardExperience
            key={index}
            date={exp.date}
            title={exp.title}
            company={exp.company}
            description={exp.description}
          />
        ))}
      </div>
    </div>
  );
};
