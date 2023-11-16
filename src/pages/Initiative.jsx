import ProgramAreas from "../components/ProgramAreas";
import Navbar from "../components/NavBar";
import CtaBox from "../components/CtaBox";
import Testimonial from "../components/Testimonial";
import { motion } from "framer-motion";

function Initiative() {
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
			>
				<Navbar />
				<div className="team-header">
					<img
						src="https://inclusionafrika.imgix.net/community.jpg"
						alt="medium-shot-happy-african-people"
						className="img-fluid"
					/>
					<div className="overlay">
						<h1 className="text">Our Initiatives</h1>
					</div>
				</div>
				<section className="container top">
					<motion.div
						className="text d-flex"
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1.5, delay: 0.4 }}
					>
						<div className="title d-flex"></div>
						<p className="fs-5">
							Our initiatives make differences in the lives of African youth. We
							have crafted a diverse range of programs that address these
							challenges.
						</p>
					</motion.div>
				</section>
				<ProgramAreas />
				<CtaBox />
				<Testimonial />
			</motion.div>
		</>
	);
}

export default Initiative;
