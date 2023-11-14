import DonateButton from "./DonateButton";
import { Link } from "react-router-dom";
import "../styles/CtaBox.css";

const CtaBox = () => {
	return (
		<section className="cta-box d-flex flex-column container top">
			<p className="cta-title">Become a catalyst for good</p>
			<div className="d-flex">
				<p className="cta-description">
					Please support our cause and experience the "power of one"
				</p>
				<div className="button-container d-flex">
					<div>
						<DonateButton />
					</div>
					<Link to="/getinvolved">
						<button className="mentor-btn">Get involved</button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default CtaBox;
