import ProgramAreas from "../components/ProgramAreas";
import Navbar from "../components/NavBar";
import CtaBox from "../components/CtaBox";
import Testimonial from "../components/Testimonial";

function Initiative() {
	return (
		<>
			<Navbar />
			<div className="team-header">
				<img
					src="/assets/medium-shot-happy-community.jpg"
					alt="medium-shot-happy-african-people"
					className="img-fluid"
				/>
				<div className="overlay">
					<h1 className="text">Our Initiatives</h1>
				</div>
			</div>
			<section className="container top">
				<div className="text d-flex">
					<div className="title d-flex"></div>
					<p className="fs-5">
						Our initiatives make differences in the lives of African youth. We
						have crafted a diverse range of programs that address these
						challenges.
					</p>
				</div>
				<div className="text d-flex">
					<div className="title d-flex">
						<h2>Program Areas</h2>
						<hr />
					</div>
					<p>
						Explore our initiatives below to see how we're working towards a
						brighter future for African young adults:
					</p>
				</div>
			</section>
			<ProgramAreas />
			<CtaBox />
			<Testimonial />
		</>
	);
}

export default Initiative;
