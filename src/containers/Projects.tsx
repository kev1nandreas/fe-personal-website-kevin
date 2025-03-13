"use client";

import { CardProject } from "@/components/Card/CardProject";
import { Typography } from "@/components/Typography";
import { projects } from "@/lib/data";
import Image from "next/image";

export const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center mt-40"
    >
      <Typography
        text={"h1"}
        className="text-center lg:text-center relative w-[15rem] h-[6rem] lg:h-[7rem] lg:w-[23rem] mb-20"
      >
        <Image
          src={"/assets/rectangle/hw-rectangle1.png"}
          alt={"circle1"}
          width={1000}
          height={1000}
          draggable={false}
          priority={true}
          className="absolute pointer-events-none select-none w-full h-full lg:w-full -top-6 lg:-top-6"
        ></Image>
        Projects
      </Typography>

      <div className="flex flex-col gap-7">
        {projects.map((project, index) => (
          <CardProject
            key={index}
            index={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            link={project.link}
            github={project.github}
            image={project.image}
            finished={project.finished}
          />
        ))}
      </div>
    </div>
  );
};
