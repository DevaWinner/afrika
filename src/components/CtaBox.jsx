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
					<button className="button">Donate</button>
					<button className="mentor-btn">Get involved</button>
				</div>
			</div>
		</section>
	);
};

export default CtaBox;
