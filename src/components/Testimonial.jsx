import TestimonialCard from "./TestimonialCard";
import testimonials from "../data/testimonials.json";
import "../styles/Testimonial.css";

const Testimonial = () => {
	const getRandomTestimonials = () => {
		const shuffledTestimonials = testimonials.sort(() => 0.5 - Math.random());
		return shuffledTestimonials.slice(0, 4);
	};
	const randomTestimonials = getRandomTestimonials();

	return (
		<div className="container top">
			<div className="text d-flex">
				<div className="title d-flex">
					<h2>Testimonials</h2>
					<hr />
				</div>
				<p>
					We are uplifting and Supporting hundreds of amazing young adults in
					Africa
				</p>
			</div>
			<div className="d-flex flex-column flex-md-row gap-md-0 gap-4">
				{randomTestimonials.map((testimonial, index) => (
					<TestimonialCard key={index} {...testimonial} />
				))}
			</div>
		</div>
	);
};

export default Testimonial;
