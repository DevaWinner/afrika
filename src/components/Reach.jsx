import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import flagsData from "../data/FlagsData.json";
import { motion } from "framer-motion";
import "../styles/Reach.css";

const Reach = () => {
	return (
		<motion.div
			className="operations d-flex align-items-center flex-column"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1, delay: 1.5 }}
		>
			<h3 className="text">Our Footprint</h3>
			<Row className="countries">
				{flagsData.map((flag, index) => (
					<Col key={index} xl={2} md={1} xs={4}>
						<div className="country d-flex align-items-center flex-column justify-content-center">
							<img
								src={flag.flagPath}
								alt={`${flag.country} Flag`}
								className="img-fluid"
								style={{ maxWidth: "60%", height: "auto" }}
							/>
							<p className="text-truncate">{flag.country}</p>
						</div>
					</Col>
				))}
			</Row>
		</motion.div>
	);
};

export default Reach;
