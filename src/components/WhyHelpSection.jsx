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

const WhyHelpCard = ({ icon, title, description }) => {
	return (
		<Col md={4} className="mb-3">
			<div
				className="text-center p-3 border rounded bg-light"
				style={{ height: "250px" }}
			>
				{React.cloneElement(icon, { className: "icon mb-3" })}
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
		</Col>
	);
};

const WhyHelpSection = () => {
	const reasons = [
		{
			icon: <BsGlobe size={50} color="#007BFF" />,
			title: "Africa's Potential",
			description:
				"With 70% of sub-Saharan Africa under the age of 30, the continent holds a reservoir of untapped potential.",
		},
		{
			icon: <BsPeople size={50} color="#6610F2" />,
			title: "Interdependence in Action",
			description:
				"Your contribution creates a ripple effect, fostering self-reliance and resilience in the face of adversity.",
		},
		{
			icon: <BsLightning size={50} color="#28A745" />,
			title: "The Power of Inclusion",
			description:
				"Your support enables us to provide inclusive micro loans, sparking the entrepreneurial spirit.",
		},
		{
			icon: <BsHeart size={50} color="#DC3545" />,
			title: "A Continent in Need",
			description:
				"Africa faces the challenge of approximately 10-12 million young adults entering the labor market annually.",
		},
		{
			icon: <BsTools size={50} color="#FD7E14" />,
			title: "Diverse Impact",
			description:
				"Your assistance is a lifeline for those striving to turn dreams into reality, fostering a diverse range of enterprises that uplift communities.",
		},
		{
			icon: <BsPersonCheck size={50} color="#FFC107" />,
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
						<h2>Why you should help</h2>
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
