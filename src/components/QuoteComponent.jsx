import { Container, Row, Col, Image } from "react-bootstrap";
import React from "react";

const QuoteComponent = ({ imageUrl, quoteText, author }) => {
	const formattedQuote = quoteText.split("\n").map((paragraph, index) => (
		<React.Fragment key={index}>
			{paragraph}
			<br />
		</React.Fragment>
	));

	return (
		<Container className="top">
			<Row className="justify-content-md-center">
				<Col
					md={4}
					sm={12}
					className="d-flex justify-content-center align-items"
				>
					<Image src={imageUrl} fluid rounded className="mb-3" />
				</Col>
				<Col md={6} sm={12} className="d-flex align-items-center">
					<blockquote className="blockquote">
						<p className="mb-0 fs-6 text-justify">{formattedQuote}</p>
						<footer className="blockquote-footer mt-3">{author}</footer>
					</blockquote>
				</Col>
			</Row>
		</Container>
	);
};

export default QuoteComponent;
