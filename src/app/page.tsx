import { About } from "@/containers/About";
import { Achievements } from "@/containers/Achievements";
import { Educations } from "@/containers/Educations";
import { Experiences } from "@/containers/Experiences";
import { Hero } from "@/containers/Hero";
import { Navbar } from "@/containers/Navbar";
import { Projects } from "@/containers/Projects";

export default function Page() {
  return (
    <div className="md:p-4 p-3">
      <Navbar />
      <Hero />
      <About />
      <Educations />
      <Achievements />
      <Experiences />
      <Projects />
      
      <div className="h-[40rem]"></div>
    </div>
  );
}
