import AboutHero from "../components/AboutHero";
import ImpactContainer from "../components/ImpactContainer";
import AboutStory from "../components/ AboutStory";
import FounderContainer from "../components/FounderContainer";
import PartnerSection from "../components/PartnerSection";

function About() {
	return (
		<main>
			<AboutHero />
			<ImpactContainer />
			<AboutStory />
			<FounderContainer />
			<PartnerSection />
			<h1>About Page</h1>
		</main>
	);
}

export default About;
