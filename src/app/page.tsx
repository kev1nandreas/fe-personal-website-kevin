/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";

import { About } from "@/containers/About";
import { Achievements } from "@/containers/Achievements";
import { Educations } from "@/containers/Educations";
import { Experiences } from "@/containers/Experiences";
import { Footer } from "@/containers/Footer";
import { Hero } from "@/containers/Hero";
import { Navbar } from "@/containers/Navbar";
import { Projects } from "@/containers/Projects";
import { useEffect, useState } from "react";
import { CiCircleChevUp } from "react-icons/ci";

export default function Page() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 400 ? setIsScrolled(true) : setIsScrolled(false);
    });

    window.addEventListener("keydown", (e) => {
      e.key === "1" && window.location.replace("/#home");
      e.key === "2" && window.location.replace("/#about");
      e.key === "3" && window.location.replace("/#education");
      e.key === "4" && window.location.replace("/#achievements");
      e.key === "5" && window.location.replace("/#experiences");
      e.key === "6" && window.location.replace("/#projects");
      e.key === "7" && window.location.replace("/#contact");
    });
  }, []);

  return (
    <div className="md:p-4 p-3">
      <Navbar />
      <Hero />
      <About />
      <Educations />
      <Achievements />
      <Experiences />
      <Projects />
      <Footer />

      {isScrolled && (
        <div className="fixed bottom-5 right-5 z-20" data-aos="fade-up">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="hover:-translate-y-1 rounded-full bg-[#171717] p-1 cursor-pointer transition-all duration-300">
              <CiCircleChevUp className="text-4xl" />
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
