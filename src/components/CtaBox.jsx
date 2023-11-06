import DonateButton from "./DonateButton";
import { Link } from "react-router-dom";
import "../styles/CtaBox.css";

const CtaBox = () => {
	return (
		<section className="cta-box d-flex flex-column container top">
			<p className="cta-title">Join Us in Making a Difference</p>
			<div className="d-flex">
				<p className="cta-description">
					Support us on this empowering journey and be part of the change.
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
