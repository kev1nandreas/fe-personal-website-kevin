/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useRef, useState } from "react";
import { Typography } from "../Typography";
import AOS from "aos";
import "aos/dist/aos.css";

interface CardAchievementProps {
  name: string;
  issuer: string;
  description: string;
  date?: string;
}

export const CardAchievement = ({
  name,
  issuer,
  description,
  date,
}: CardAchievementProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [showDesc, setShowDesc] = useState(false);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.addEventListener("mouseenter", () => {
        setShowDesc(true);
      });
      divRef.current.addEventListener("mouseleave", () => {
        setShowDesc(false);
      });
    }
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <div
      data-aos={"zoom-in"}
      ref={divRef}
      className="flex flex-col p-4 rounded-xl border-2 max-w-[40rem] gap-2"
      style={{ borderColor: "rgba(240, 240, 240, 0.1)" }}
    >
      <Typography
        text={"h5"}
        className={`underline-offset-4 decoration-yellow-500/80 decoration-dashed ${
          showDesc && "md:underline"
        }`}
      >
        {name}
      </Typography>
      <Typography className="text-lg font-normal opacity-90">
        {issuer}
      </Typography>
      <Typography
        className={`text-justify transition-all duration-1000 ease-in-out overflow-hidden ${
          showDesc ? "max-h-[10rem] opacity-80 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        {description}
      </Typography>
    </div>
  );
};
