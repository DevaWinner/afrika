import { LazyLoadImage } from "react-lazy-load-image-component";
import "../styles/WhoWeAreSection.css";

const WhoWeAreSection = () => {
	return (
		<section className="who-we-are container">
			<div className="text d-flex">
				<div className="title d-flex">
					<h2>Who we are</h2>
					<hr />
				</div>
				<p>
					Inclusion Afrika is a non-profit organization that believes in the
					"power of one." We believe "one donor" and "one African" recipient can
					be a catalyst for good in our world. The donor's expression of love
					unleashes potential and results in meaningful change in Africa.
				</p>
			</div>
			<div className="intro d-flex">
				<div className="mission d-flex">
					<div className="img d-flex">
						<div>
							<LazyLoadImage
								src="https://inclusionafrika.imgix.net/transaction.jpg"
								effect="blur"
								alt="Inclusion Africa"
								className="img-fluid"
							/>
						</div>
					</div>
					<div className="vertical-line"></div>
					<div className="description text-justify d-flex">
						<div className="d-flex justify-content-center align-items-center gap-4">
							<img
								src="https://inclusionafrika.imgix.net/target.png"
								alt="Target Graphic"
								className="icons"
							/>
							<h3>Our Mission</h3>
						</div>

						<p>
							Our mission is to facilitate inclusion and self-reliance,
							empowering individuals to thrive. Through sustainable programs, we
							break down barriers, promote diversity, and create opportunities
							that enable young adults to progress.
						</p>
					</div>
				</div>
				<div className="vision d-flex">
					<div className="description text-justify d-flex">
						<div className="d-flex justify-content-center align-items-center gap-4">
							<img
								src="https://inclusionafrika.imgix.net/opportunity.png"
								alt="Target Graphic"
								className="icons"
							/>
							<h3>Our Vision</h3>
						</div>
						<p>
							Our vision is to transform lives by providing micro-loans and
							sponsoring educational activities. By blending financial support
							with educational opportunities, we pave the way for a brighter
							future in young adults.
						</p>
					</div>
					<div className="vertical-line"></div>
					<div className="img d-flex">
						<div>
							<LazyLoadImage
								src="https://inclusionafrika.imgix.net/vision.jpg"
								effect="blur"
								alt="Inclusion Africa"
								className="img-fluid"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhoWeAreSection;
