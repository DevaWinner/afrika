import { Container, Row, Col, Image } from "react-bootstrap";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const QuoteComponent = ({ imageUrl, quoteText, author }) => {
	const { ref: imageRef, inView: imageInView } = useInView({
		triggerOnce: false,
	});

	const { ref: quoteRef, inView: quoteInView } = useInView({
		triggerOnce: false,
	});

	const imageVariants = {
		hidden: { opacity: 0, x: -50 },
		show: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 1,
			},
		},
	};

	const quoteVariants = {
		hidden: { opacity: 0, x: 10 },
		show: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 1,
			},
		},
	};

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
					ref={imageRef}
				>
					<motion.div
						variants={imageVariants}
						initial="hidden"
						animate={imageInView ? "show" : "hidden"}
					>
						<Image src={imageUrl} fluid rounded className="mb-3" />
					</motion.div>
				</Col>
				<Col
					md={6}
					sm={12}
					className="d-flex align-items-center"
					ref={quoteRef}
				>
					<motion.blockquote
						className="blockquote"
						variants={quoteVariants}
						initial="hidden"
						animate={quoteInView ? "show" : "hidden"}
					>
						<p className="mb-0 fs-6 text-justify">{formattedQuote}</p>
						<footer className="blockquote-footer mt-3">{author}</footer>
					</motion.blockquote>
				</Col>
			</Row>
		</Container>
	);
};

export default QuoteComponent;
