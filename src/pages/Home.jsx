import Navbar from "../components/NavBar";
import HeroCarousel from "../components/Carousel";
import Reach from "../components/Reach";
import WhoWeAreSection from "../components/WhoWeAreSection";
import WhatWeDo from "../components/WhatWeDo";
import CtaBox from "../components/CtaBox";
import ContactForm from "../components/ContactForm";
import PartnerSection from "../components/PartnerSection";
import Testimonial from "../components/Testimonial";
import "../styles/Home.css";

function Home() {
	return (
		<>
			<div style={{ zIndex: 1 }}>
				<Navbar />
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
				<Reach />
				<WhoWeAreSection />
				<WhatWeDo />
				<CtaBox />
				<ContactForm />
				<PartnerSection />
				<Testimonial />
			</div>
		</>
	);
}

export default Home;
