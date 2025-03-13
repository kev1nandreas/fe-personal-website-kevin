"use client";

import { CardAchievement } from "@/components/Card/CardAchievement";
import { Typography } from "@/components/Typography";
import { achievements } from "@/lib/data";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export const Achievements = () => {
  AOS.init({
    duration: 1000,
  });

  return (
    <div
      id="achievements"
      className="flex lg:flex-row flex-col justify-center items-center lg:items-start mt-40 text-left gap-20"
    >
      {/* Left Container */}
      <div className="flex flex-col items-center max-w-[30rem] lg:mt-10">
        <Typography
          data-aos={"fade-up"}
          text={"h1"}
          className="text-center lg:text-center relative w-[23rem] h-[8rem] lg:w-[35rem] bg-gradient-to-r from-yellow-500 to-yellow-500 via-yellow-300 text-transparent bg-clip-text hover:scale-105 !transition-all !duration-800 !ease-in-out"
        >
          <Image
            src={"/assets/circle/hw-circle3.png"}
            alt={"circle1"}
            width={1000}
            height={1000}
            draggable={false}
            priority={true}
            className="absolute pointer-events-none select-none w-[23rem] h-[8rem] lg:w-[35rem] -top-10 lg:-top-9 "
          ></Image>
          Achievements
        </Typography>
        <Typography
          data-aos={"fade-up"}
          text={"body"}
          className="opacity-70 -mt-5 lg:text-left text-center"
        >
          I embrace competition to push my limits, sharpen my skills, and keep
          growing. Here are some of my achievements.
        </Typography>
      </div>

      {/* Right Container */}
      <div className="flex flex-col items-center justify-center gap-3">
        {achievements.map((achievement, index) => (
          <CardAchievement
            key={index}
            name={achievement.name}
            issuer={achievement.issuer}
            description={achievement.description}
            date={achievement.date}
          />
        ))}
      </div>
    </div>
  );
};
