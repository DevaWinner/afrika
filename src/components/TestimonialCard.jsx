import PropTypes from "prop-types";

const TestimonialCard = ({ text, author, image, country }) => {
	return (
		<div className="testimonial-card">
			<div className="testimonial-image">
				<img src={image} alt={`User ${author}`} />
			</div>
			<div className="testimonial-text">
				<p>{text}</p>
				<p className="testimonial-author ">- {author}</p>
				<p className="fs-6 text-country">{country}</p>
			</div>
		</div>
	);
};

TestimonialCard.propTypes = {
	text: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
};

export default TestimonialCard;
