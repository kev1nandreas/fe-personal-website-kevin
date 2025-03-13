'use client';

import { CardExperience } from "@/components/Card/CardExperience";
import { Typography } from "@/components/Typography";
import { experiences } from "@/lib/data";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export const Experiences = () => {
  AOS.init({
    duration: 1000,
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
        <Image
          src={"/assets/underline/hw-underline1.png"}
          alt={"underline"}
          width={800}
          height={800}
          draggable={false}
          priority={true}
          className="pointer-events-none select-none absolute bottom-0 left-0 right-0"
        ></Image>
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
