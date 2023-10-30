import { Container, Row, Col, Image } from "react-bootstrap";

const QuoteComponent = ({ imageUrl, quoteText, author }) => {
	return (
		<Container className="top">
			<Row className="justify-content-md-center">
				<Col
					md={3}
					sm={12}
					className="d-flex justify-content-center align-items"
				>
					<Image src={imageUrl} fluid rounded className="mb-3" />
				</Col>
				<Col md={6} sm={12} className="d-flex align-items-center">
					<blockquote className="blockquote">
						<p className="mb-0 fs-6">{quoteText}</p>
						<footer className="blockquote-footer mt-3">{author}</footer>
					</blockquote>
				</Col>
			</Row>
		</Container>
	);
};

export default QuoteComponent;
