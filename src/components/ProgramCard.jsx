import { Col, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import DonateButton from "./DonateButton";

const ProgramCard = ({ title, imgSrc, description }) => {
	return (
		<Col md={12} className="program-areas">
			<Row className="program-card d-flex align-items-center justify-content-center gap-4">
				<Col xs={12} md={6} className="program-card-img">
					<LazyLoadImage
						src={imgSrc}
            effect="blur"
						alt={title}
						className="img-fluid rounded"
					/>
				</Col>
				<Col
					xs={12}
					md={6}
					className="program-card-text d-flex flex-column gap-md-3"
				>
					<div className="title d-flex">
						<h3 className="fs-5 fw-bold">{title}</h3>
						<hr />
					</div>
					<p className="fs-6 text-justify">{description}</p>
					<div className="program-button-container d-flex gap-3">
						<DonateButton />
						<Link to="/getinvolved">
							<Button className="program-button-2">Get Involved</Button>
						</Link>
					</div>
				</Col>
			</Row>
		</Col>
	);
};

export default ProgramCard;
