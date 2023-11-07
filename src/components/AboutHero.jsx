import { Container } from "react-bootstrap";
import "../styles/AboutHero.css";

const AboutHero = () => {
	return (
		<>
			<section className="about-hero">
				<img src="/assets/about-hero-scaled.jpg" alt="About Hero Image" className="img-fluid" />
				<div className="about-hero-text">
					<h1>About Inclusion Africa</h1>
					<p>
						Inclusion Afrika was incorporated in Accra Ghana by Joseph Bentum
						and David Rupper in June 2023. Although Inclusion Afrika is based in
						Ghana, it has a network throughout Sub-Saharan Africa. Inclusion
						Afrika was organized because African young adults are facing many
						challenges including poverty, inadequate education, unemployment and
						a lack of capital or opportunity.
					</p>
				</div>
			</section>
			<Container>
				<div className="about-quote d-flex flex-column container">
					<blockquote className="mb-2">
						“Inclusion is the act of including someone or something as part of a
						group...”
					</blockquote>
					<p>-Cambridge Dictionary definition of “inclusion”</p>
				</div>
			</Container>
		</>
	);
};

export default AboutHero;
