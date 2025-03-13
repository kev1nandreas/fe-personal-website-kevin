'use client';

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
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      window.scrollY > 400 ? setIsScrolled(true) : setIsScrolled(false);
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
            <div className="hover:-translate-y-1 cursor-pointer transition-all duration-300 p-4">
              <CiCircleChevUp className="text-4xl" />
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
