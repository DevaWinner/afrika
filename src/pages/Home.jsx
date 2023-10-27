import HeroCarousel from "../components/Carousel";
import ImpactSection from "../components/ImpactSection";
import WhoWeAreSection from "../components/WhoWeAreSection";
import WhatWeDo from "../components/WhatWeDo";
import CtaBox from "../components/CtaBox";
import ContactForm from "../components/ContactForm";
import PartnerSection from "../components/PartnerSection";
import "../styles/Home.css";

function Home() {
	return (
		<main>
			<section className="hero">
				<HeroCarousel />

				<div className="overlay heading">
					<div className="text">
						<h1>
							Become a
							<br />
							Catalyst for <br />
							Growth in Africa
						</h1>
					</div>
				</div>
			</section>
			<ImpactSection />
			<WhoWeAreSection />
			<WhatWeDo />
			<CtaBox />
			<ContactForm />
			<PartnerSection />
		</main>
	);
}

export default Home;
