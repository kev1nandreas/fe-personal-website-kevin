"use client";

import { ColorfulButton } from "@/components/Button/ColorfulButton";
import { Typography } from "@/components/Typography";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen gap-5">
      <div className="hidden md:flex items-center justify-center">
        <Image src={"/KevinHeroCrop.png"} alt={"Kevin Hero Pict"} width={200} height={200} className="w-[20rem]"/>
      </div>
      <div className="flex flex-col gap-3 w-[48rem] max-w-screen p-3 items-center md:items-start">
        <Typography text={"h4"}>
          Hello, I am{" "}
          <span className="bg-gradient-to-r from-yellow-500 to-yellow-500 via-yellow-200 via-50% text-transparent bg-clip-text">
            Kevin Andreas
          </span>
        </Typography>
        <TypeAnimation
          sequence={[
            "I'm an Informatics Student",
            1000,
            "I'm into Web Development",
            1000,
            "I'm into Data Analysis",
            2000,
          ]}
          cursor={true}
          wrapper="span"
          repeat={Infinity}
          speed={20}
          deletionSpeed={60}
          className="md:text-5xl text-2xl font-semibold"
        />
        <Typography text={"body"} className="mt-3">
          Let&apos;s get to know more about me.
        </Typography>
        <ColorfulButton href="/#about" hoverActive={true} rounded="full">Dive In</ColorfulButton>
      </div>
    </div>
  );
};
