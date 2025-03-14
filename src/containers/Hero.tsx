"use client";

import { ColorfulButton } from "@/components/Button/ColorfulButton";
import { Typography } from "@/components/Typography";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { IconDescription } from "@/components/IconDescription";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <div
      id="home"
      className="relative flex items-center justify-center h-screen gap-5"
    >
      <div className="absolute top-16 right-0">
        <div className="w-[26rem] h-[8rem] -rotate-38 blur-[5rem] opacity-40 bg-gradient-to-l from-indigo-700 to-indigo-400"></div>
      </div>

      <div
        data-aos={"fade-right"}
        className="hidden md:flex items-center justify-center"
      >
        <Image
          src={"/KevinHeroCrop.png"}
          alt={"Kevin Hero Pict"}
          width={200}
          height={200}
          draggable={false}
          priority={true}
          loading="eager"
          className="w-[20rem] pointer-events-none select-none"
        />
      </div>
      <div
        data-aos={"fade-left"}
        className="flex flex-col gap-3 w-[48rem] max-w-screen p-3 items-center md:items-start"
      >
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
        <ColorfulButton href="/#about" hoverActive={true} rounded="full">
          Dive In
        </ColorfulButton>

        <div className="flex gap-2 mt-5">
          <Link href={"mailto:kevin.andreascn@gmail.com"} target="_blank">
            <IconDescription name={"mail"} size={"xl"}></IconDescription>
          </Link>
          <Link href={"https://instagram.com/kev1nandreas"} target="_blank">
            <IconDescription name={"instagram"} size={"xl"}></IconDescription>
          </Link>
          <Link href={"https://linkedin.com/in/kevinandreas"} target="_blank">
            <IconDescription name={"linkedin"} size={"xl"}></IconDescription>
          </Link>
          <Link href={"https://github.com/kev1nandreas"} target="_blank">
            <IconDescription name={"github"} size={"xl"}></IconDescription>
          </Link>
        </div>
      </div>
    </div>
  );
};
