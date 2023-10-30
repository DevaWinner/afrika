import { Container } from "react-bootstrap";
import "../styles/FounderContainer.css";

const FounderContainer = () => {
	return (
		<section className="founder-container d-flex flex-column container top">
			<div className="text d-flex">
				<div className="title d-flex">
					<h2>Our Team</h2>
					<hr className="bg-primary" />
				</div>
				<p>
					Our team is comprised of individuals from diverse backgrounds, united
					by a common goal: to empower African youth and create pathways to
					self-reliance.
				</p>
			</div>
			<div className="d-flex flex-column founders">
				<div className="founder-item d-flex align-items-center justify-content-center">
					<div className="founder-img">
						<img
							src="/assets/rupper.jpeg"
							alt="Photo of David Rupper"
							className="image-fluid"
						/>
					</div>
					<div className="founder-description d-flex flex-column">
						<p>
							David retired from a global insurance company as a corporate
							ethics and compliance vice-president in May 2019. Although David
							had extensive corporate experience in Asia (including living in
							Hong Kong and Tokyo), he focused his retirement efforts on
							non-profit work in Africa. David has volunteered as a career and
							economic development specialist for BYU-Pathway Worldwide in
							Africa. He also assisted with the organization of The Lord's Hands
							(where he acts as an advisor). David currently sits on the Global
							Board of the BYU Management Society where he serves a VP,
							Strategic Development with a concentration of Africa.
						</p>
						<div className="founder-name">
							<h1>David Rupper</h1>
							<p>Co-Founder, USA</p>
						</div>
					</div>
				</div>
				<div className="founder-item item-2 d-flex align-items-center justify-content-center">
					<div className="founder-description d-flex flex-column">
						<p>
							Joseph Bentum's journey is a testament to the power of resilience
							and the belief in creating change. Born and raised in Ghana,
							Joseph grew up in an environment where challenges were a part of
							daily life. It was in this backdrop that his passion for
							transforming communities and empowering individuals was ignited.{" "}
							<br />
							Joseph's local insights and unwavering commitment have been
							pivotal in driving the organization's mission to uplift African
							youth and create pathways to self-reliance.
						</p>
						<div className="founder-name">
							<h1>Joseph Yaw Bentum</h1>
							<p>Board Member, Africa</p>
						</div>
					</div>
					<div className="founder-img second">
						<img src="/assets/bentum.jpeg" alt="Photo of Joseph Bentum" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default FounderContainer;
