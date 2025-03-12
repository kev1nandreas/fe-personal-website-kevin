"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react";

export const Photo = ({ className }: { className?: string }) => {
  const [active, setActive] = useState(false);
  const areaRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (areaRef.current) {
      areaRef.current.addEventListener("mouseenter", () => {
        setActive(true);
      });
      areaRef.current.addEventListener("mouseleave", () => {
        setActive(false);
      });
    }
  }, [areaRef]);

  return (
    <div className={`${className} relative w-[20rem] h-[20rem]`}>
      <div
        className={`absolute overflow-hidden rounded-2xl rotate-10 border-2 border-gray-500 transition-all duration-700 ease-in-out ${
          active ? "z-10 opacity-100" : "opacity-20"
        }`}
      >
        <Image
          src={"/BeachKevin.jpg"}
          alt={"Kevin Beach"}
          width={200}
          height={200}
          draggable={false}
          className="w-[18rem] pointer-events-none select-none"
        />
      </div>
      <div
        className={`absolute overflow-hidden border-2 -rotate-3 rounded-2xl border-gray-500 transition-all duration-700 ease-in-out ${
          !active ? "z-10" : "opacity-20"
        }`}
      >
        <Image
          src={"/BambooKevin.jpg"}
          alt={"Kevin Bamboo"}
          width={200}
          height={200}
          draggable={false}
          className="w-[18rem] pointer-events-none select-none"
        />
      </div>
      <div
        ref={areaRef}
        className="relative -top-5 -left-2 rounded-2xl w-[18rem] h-[18rem] bg-transparent z-20"
      ></div>
    </div>
  );
};
