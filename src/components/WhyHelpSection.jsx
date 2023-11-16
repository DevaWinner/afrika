import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
	BsGlobe,
	BsPeople,
	BsLightning,
	BsHeart,
	BsTools,
	BsPersonCheck,
} from "react-icons/bs";
import { motion } from "framer-motion";

const WhyHelpCard = ({ icon, title, description }) => {
	return (
		<Col md={4} className="mb-3">
			<motion.div
				className="text-center p-3 border rounded bg-light"
				style={{ height: "250px" }}
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
				whileHover={{ scale: 1.05 }}
			>
				<motion.div
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					className="icon mb-3"
				>
					{React.cloneElement(icon, { size: 50, color: "#007BFF" })}
				</motion.div>
				<motion.h4 whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
					{title}
				</motion.h4>
				<motion.p whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
					{description}
				</motion.p>
			</motion.div>
		</Col>
	);
};

const WhyHelpSection = () => {
	const reasons = [
		{
			icon: <BsGlobe />,
			title: "Africa's Potential",
			description:
				"With 70% of sub-Saharan Africa under the age of 30, the continent holds a reservoir of untapped potential.",
		},
		{
			icon: <BsPeople />,
			title: "Interdependence in Action",
			description:
				"Your contribution creates a ripple effect, fostering self-reliance and resilience in the face of adversity.",
		},
		{
			icon: <BsLightning />,
			title: "The Power of Inclusion",
			description:
				"Your support enables us to provide inclusive micro loans, sparking the entrepreneurial spirit.",
		},
		{
			icon: <BsHeart />,
			title: "A Continent in Need",
			description:
				"Africa faces the challenge of approximately 10-12 million young adults entering the labor market annually.",
		},
		{
			icon: <BsTools />,
			title: "Diverse Impact",
			description:
				"Your assistance is a lifeline for those striving to turn dreams into reality, fostering a diverse range of enterprises that uplift communities.",
		},
		{
			icon: <BsPersonCheck />,
			title: "Your Contribution",
			description:
				"Whether it's financial support or sharing your time, your unique value can make a lasting impact on the lives of young Africans.",
		},
	];

	return (
		<div className="pt-4 px-3 rounded mt-3">
			<Container>
				<div className="text d-flex">
					<div className="title d-flex">
						<motion.h2
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
						>
							Why you should help
						</motion.h2>
						<hr />
					</div>
				</div>
				<Row className="g-4">
					{reasons.map((reason, index) => (
						<WhyHelpCard key={index} {...reason} />
					))}
				</Row>
			</Container>
		</div>
	);
};

export default WhyHelpSection;
