import { Container } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../styles/WhatWeDo.css";

const WhatWeDo = () => {
	return (
		<Container className="top">
			<div className="text d-flex">
				<div className="title d-flex">
					<h2>Our Approach</h2>
					<hr />
				</div>
				<p>
					We provide hope to the "forgotten" and acceptance to those who "have
					not"
				</p>
			</div>

			<div className="card-group d-flex container">
				<div className="card">
					<LazyLoadImage
						src="/assets/seller.jpg"
						effect="blur"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h3 className="card-title">Micro Loans</h3>
						<p className="card-text">
							We provide micro loans to motivated individuals across Africa.
							These loans spark entrepreneurial spirit, fuel local businesses,
							and foster self-reliance. From pig farming to soccer cinemas, our
							loans support a wide range of ventures.
						</p>
					</div>
				</div>
				<div className="card">
					<LazyLoadImage
						src="/assets/students.jpg"
            effect="blur"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h3 className="card-title">Educational Growth</h3>
						<p className="card-text">
							We facilitate workshops, learning centers, and scholarships that
							accelerate skill development and job readiness among African
							youth. Our goal is to prepare young adults for remote work
							opportunities in the digital age.
						</p>
					</div>
				</div>
				<div className="card">
					<LazyLoadImage
						src="/assets/hand-shake.jpg"
            effect="blur"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h3 className="card-title">Mentoring and Support</h3>
						<p className="card-text">
							We are dedicated to helping loan recipients succeed. We work
							closely with borrowers, offering guidance and assistance to ensure
							the success of their ventures.
						</p>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default WhatWeDo;
