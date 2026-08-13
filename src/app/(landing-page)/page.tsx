import About from "./_components/About";
import Achievements from "./_components/Achievements";
import Education from "./_components/Education";
import { Experiences } from "./_components/Experiences";
import Hero from "./_components/Hero";
import { Projects } from "./_components/Projects";

export default function LandingPage() {
	return (
		<>
			<Hero />
			<About />
			<Education />
			<Achievements />
			<Experiences limit={3} showViewAll />
			<Projects limit={3} showViewAll />
		</>
	);
}
