import { CardAchievement } from "@/components/CardAchievement";
import { Typography } from "@/components/Typography";
import { achievements } from "@/lib/data";
import Image from "next/image";

export const Achievements = () => {
  return (
    <div
      id="achievements"
      className="flex md:flex-row flex-col justify-center mt-40 text-left gap-20"
    >
      {/* Left Container */}
      <div className="flex flex-col items-center max-w-[30rem] md:mt-10">
        <Typography
          text={"h1"}
          className="text-center md:text-center relative w-[23rem] h-[8rem] md:w-[35rem]"
        >
          <Image
            src={"/assets/circle/hw-circle3.png"}
            alt={"circle1"}
            width={1000}
            height={1000}
            draggable={false}
            className="absolute pointer-events-none select-none w-[23rem] h-[8rem] md:w-[35rem] -top-10 md:-top-9"
          ></Image>
          Achievements
        </Typography>
        <Typography
          text={"body"}
          className="opacity-70 -mt-5 md:text-left text-center"
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
