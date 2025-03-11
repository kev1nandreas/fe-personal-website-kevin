import { Hero } from "@/containers/Hero";
import { Navbar } from "@/containers/Navbar";

export default function Page() {
  return (
    <div className="md:p-4 p-3">
      <Navbar />
      <Hero />
      <div className="h-[30rem]"></div>
    </div>
  );
}
