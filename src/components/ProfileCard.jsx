import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Col, Button, Modal } from "react-bootstrap";

const ProfileCard = ({ type, name, intro, image, bio, linkedin }) => {
	const [showModal, setShowModal] = useState(false);

	const handleModalShow = () => setShowModal(true);
	const handleModalClose = () => setShowModal(false);

	const formattedBio = bio.split("\n").map((paragraph, index) => (
		<React.Fragment key={index}>
			{paragraph}
			<br />
		</React.Fragment>
	));

	return (
		<Col lg={4} md={6} className="mb-5">
			<div className={`${type.toLowerCase()}-member text-center`}>
				<div>
					<LazyLoadImage
						src={image}
						alt={`${name} photograph`}
            effect="blur"
						className="img-fluid mb-3 photo"
					/>
				</div>
				<h3 className="fs-5">{name}</h3>
				<p className="fs-6">{intro}</p>
				<div className="d-flex justify-content-center gap-2">
					{linkedin && (
						<a href={linkedin} target="_blank" rel="noopener noreferrer">
							<i className="fab fa-linkedin fa-2x"></i>
						</a>
					)}
					<Button variant="link" onClick={handleModalShow}>
						Read About {name.split(" ")[0]}
					</Button>
				</div>

				<Modal show={showModal} onHide={handleModalClose} centered size="lg">
					<Modal.Header closeButton>
						<Modal.Title>{name}</Modal.Title>
					</Modal.Header>
					<Modal.Body
						style={{
							maxHeight: "calc(100vh - 200px)",
							overflowY: "auto",
							padding: "1rem",
							textAlign: "justify",
						}}
					>
						{formattedBio}
					</Modal.Body>
				</Modal>
			</div>
		</Col>
	);
};

export default ProfileCard;
