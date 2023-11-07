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
					Inclusion Africa is a non-profit organization that is committed to
					providing quality education to children with special needs in Africa.
					We are currently operating in 10 African countries and we are
					committed to expanding our reach to other African countries.
				</p>
			</div>
			<div className="intro d-flex">
				<div className="mission d-flex">
					<div className="img d-flex">
						<div>
							<LazyLoadImage
								src="/assets/transaction.jpg"
                effect="blur"
								alt="Inclusion Africa"
								className="img-fluid"
							/>
						</div>
					</div>
					<div className="vertical-line"></div>
					<div className="description text-justify d-flex">
						<h3>Our Mission</h3>
						<p>
							We facilitate inclusion and self-reliance, empowering individuals
							to thrive. Through sustainable programs, we break down barriers,
							promote diversity, and create opportunities that enable young
							adults to progress.
						</p>
					</div>
				</div>
				<div className="vision d-flex">
					<div className="description text-justify d-flex">
						<h3>Our Vision</h3>
						<p>
							We empower lives by providing micro-loans and sponsoring
							educational activities. By blending financial support with
							educational opportunities, we pave the way for a brighter future
							in young adults.
						</p>
					</div>
					<div className="vertical-line"></div>
					<div className="img d-flex">
						<div>
							<LazyLoadImage
								src="/assets/vision.jpg"
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
