import Navbar from "../components/NavBar";
import AboutHero from "../components/AboutHero";
import ImpactContainer from "../components/ImpactContainer";
import AboutStory from "../components/ AboutStory";
import PartnerSection from "../components/PartnerSection";
import QuoteComponent from "../components/QuoteComponent";
import CtaBox from "../components/CtaBox";

function About() {
	const quote = {
		imageUrl: "/assets/marion.jpg",
		quoteText:
			"There is an interdependence between those who have and those who have not. The process of giving exalts the poor and humbles the rich. In the process, both are sanctified. The poor, released from bondage and limitations of poverty, are enabled as free men to rise to their full potential, both temporally and spiritually.[Those who have more], by imparting of their surplus, participate in the eternal principles of giving. Once a person has made whole, or self-reliant, he reaches out to aid others, and the cycle repeats itself.",
		author: "Marian G. Romney",
	};
	return (
		<>
			<Navbar />
			<AboutHero />
			<ImpactContainer />
			<AboutStory />
			<PartnerSection />
			<QuoteComponent {...quote} />
			<CtaBox />
		</>
	);
}

export default About;
