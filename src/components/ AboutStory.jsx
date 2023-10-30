import { Container, Row, Col } from "react-bootstrap";
import "../styles/AboutStory.css";

const AboutStory = () => {
	return (
		<section className="about-story top d-flex flex-column align-items-center container">
			<Container>
				<div className="text d-flex">
					<div className="title d-flex">
						<h2>Our Story</h2>
						<hr className="bg-primary" />
					</div>
					<p>
						Inclusion Afrika Initiative Limited was born from a shared dream, a
						vision of hope, and a commitment to change. Our story is one of
						unity, resilience, and the unwavering belief in the potential of
						African young adults.
					</p>
				</div>
				<Row className="story-container d-flex flex-column">
					<Col className="story d-flex align-items-center">
						<p className="story-title">The Visionaries</p>
						<div className="story-line"></div>
						<p className="story-text">
							Founded by Joseph Bentum and David Rupper, our story brings
							together two individuals from diverse backgrounds. Joseph, born
							and raised in Ghana, and David, hailing from the United States of
							America, may have had different life circumstances, but they
							shared a common belief: that working together, they could make a
							difference.
						</p>
					</Col>
					<Col className="story d-flex align-items-center">
						<p className="story-title">The Spark</p>
						<div className="story-line"></div>
						<p className="story-text">
							Our journey began with the realization that Africa's young adults
							were facing significant challenges, including poverty, inadequate
							education, and unemployment. The statistics were daunting - 70% of
							sub-Saharan Africa's population is under the age of 30, presenting
							both an opportunity and a responsibility.
						</p>
					</Col>
					<Col className="story d-flex align-items-center">
						<p className="story-title">The Belief</p>
						<div className="story-line"></div>
						<p className="story-text">
							We believe in the power of inclusion, the idea that everyone,
							regardless of their background or circumstances, should have the
							opportunity to thrive. We believe in the interdependence between
							those who have and those who have not, a principle that guides our
							actions.
						</p>
					</Col>
					<Col className="story d-flex align-items-center">
						<p className="story-title">Our Initiatives</p>
						<div className="story-line"></div>
						<p className="story-text">
							Inclusion Afrika was created to facilitate self-reliance
							opportunities for those born with so little, but so determined to
							succeed. We believe microloans fuel the entrepreneurial spirit and
							target educational grants are answers to hard work and prayer.
						</p>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default AboutStory;
