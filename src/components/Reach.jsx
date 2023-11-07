import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import flagsData from "../data/FlagsData.json";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../styles/Reach.css";

const Reach = () => {
	return (
		<Container className="operations d-flex align-items-center flex-column">
			<p className="text">We are making impacts in 10 African countries</p>
			<Row className="countries">
				{flagsData.map((flag, index) => (
					<Col key={index} xl={2} md={1} xs={4}>
						<div className="country d-flex align-items-center flex-column">
							<LazyLoadImage
								src={flag.flagPath}
								effect="blur"
								alt={`${flag.country} Flag`}
								className="img-fluid"
								style={{ maxWidth: "60%", height: "auto" }}
							/>
							<p className="text-truncate">{flag.country}</p>
						</div>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default Reach;
