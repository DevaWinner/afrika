import "../styles/PartnerSection.css";
import partnerLogo from "../data/partnerLogo.json";
import { Row, Col } from "react-bootstrap";

const PartnerSection = () => {
	return (
		<section className="partner-container container top">
			<div className="text d-flex">
				<div className="title d-flex">
					<h2>Partners</h2>
					<hr />
				</div>
				<p>
					We are grateful for the collaborative spirit of our amazing partners
				</p>
			</div>
			<Row className="partners d-flex">
				{partnerLogo.map((partner, index) => (
					<Col key={index} xl={2} md={1} xs={4}>
						<div className="partner d-flex align-items-center flex-column">
							<img
								src={partner.partnerLogo}
								alt={partner.partnerName}
								className="img-fluid"
								style={{ maxWidth: "60%", height: "auto" }}
							/>
						</div>
					</Col>
				))}
			</Row>
		</section>
	);
};

export default PartnerSection;
