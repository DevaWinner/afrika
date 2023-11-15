import Navbar from "../components/NavBar";
import WhyHelpSection from "../components/WhyHelpSection";
import CtaBox from "../components/CtaBox";
import Testimonial from "../components/Testimonial";
import OtherWaysToSupport from "../components/OtherWaysToSupport";
import VideoComponent from "../components/VideoComponent";

function GetInvolved() {
	return (
		<>
			<Navbar />
			<div className="team-header">
				<img
					src="https://inclusionafrika.imgix.net/hand-shake.jpg"
					alt="medium-shot-happy-african-people"
					className="img-fluid"
				/>
				<div className="overlay">
					<h1 className="text">Get Involved</h1>
				</div>
			</div>
			<div className="text d-flex">
				<div className="title d-flex"></div>
				<p className="mt-4 fs-5">
					Young Adults in Africa needs what you have to offer! Your support can
					help individuals climb out of poverty and become self-reliant.
				</p>
			</div>
			<VideoComponent />
			<WhyHelpSection />
			<CtaBox />
			<OtherWaysToSupport />
			<Testimonial />
		</>
	);
}

export default GetInvolved;
