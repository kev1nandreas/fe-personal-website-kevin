'use client';

import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Typography } from "./Typography";
import { useEffect, useRef, useState } from "react";
import { IconType } from "react-icons";

interface IconDescriptionProps {
  name: string;
  size: string;
}

const iconMap: Record<string, {icon: IconType, desc: string}> = {
    "next" : {icon: SiNextdotjs, desc: "Next Js"},
    "tailwind" : {icon: RiTailwindCssFill, desc: "Tailwind CSS"},
    "github-r" : {icon: FaGithub, desc: "Github Repository"},
    "github" : {icon: FaGithub, desc: "Github"},
    "laravel" : {icon: FaLaravel, desc: "Laravel"},
    "react" : {icon: FaReact, desc: "React Js"},
    "instagram" : {icon: FaInstagram, desc: "Instagram"},
    "linkedin" : {icon: FaLinkedin, desc: "Linkedin"},
    "mail" : {icon: IoMdMail, desc: "Email"}
}

export const IconDescription = (
    {name, size}: IconDescriptionProps
) => {
  const ref = useRef<HTMLDivElement>(null);
  const [showDesc, setShowDesc] = useState(false);
  const asset = iconMap[name];

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("mouseenter", () => {
        setShowDesc(true);
      });
      ref.current.addEventListener("mouseleave", () => {
        setShowDesc(false);
      });
    }
  });

  return (
    <div
      className="flex items-center gap-2 h-[2rem] transition-all duration-1000 ease-in-out"
      ref={ref}
    >
      <asset.icon className={`text-${size} text-white`} />
      <div
        className={`overflow-hidden transition-all duration-1000 ease-in-out h-fit ${
          showDesc ? "max-w-[8rem] opacity-80" : "max-w-0 opacity-0"
        }`}
      >
        <Typography className="text-sm whitespace-nowrap">{asset.desc}</Typography>
      </div>
    </div>
  );
};
