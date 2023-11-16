import { LazyLoadImage } from "react-lazy-load-image-component";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TestimonialCard = ({ text, author, image, country }) => {
	const { ref: cardRef, inView: cardInView } = useInView({
		triggerOnce: false,
	});

	return (
		<motion.div
			className="testimonial-card"
			ref={cardRef}
			initial={{ opacity: 0, y: 100 }}
			animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
			transition={{ duration: 0.8 }}
		>
			<div className="testimonial-image">
				<LazyLoadImage src={image} effect="blur" alt={`User ${author}`} />
			</div>
			<div className="testimonial-text">
				<p>{text}</p>
				<p className="testimonial-author ">- {author}</p>
				<p className="fs-6 text-country">{country}</p>
			</div>
		</motion.div>
	);
};

TestimonialCard.propTypes = {
	text: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
};

export default TestimonialCard;
