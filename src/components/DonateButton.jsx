// DonateButton.js
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/DonateButton.css";
import { ModalFooter } from "react-bootstrap";

const DonateButton = () => {
	const [showModal, setShowModal] = useState(false);

	const handleModalOpen = () => {
		setShowModal(true);
	};

	const handleModalClose = () => {
		setShowModal(false);
	};

	return (
		<>
			<Button
				variant="secondary"
				className="mobile-button"
				onClick={handleModalOpen}
			>
				Donate
			</Button>

			{/* Modal */}
			<Modal
				show={showModal}
				onHide={handleModalClose}
				centered
				animation={true}
				size="lg"
			>
				<Modal.Header closeButton>
					<Modal.Title>Donate</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Row className="donate-row">
						<Col md={6} className="text-center mb-3 mb-md-0 image">
            </Col>

						{/* Instructions */}
						<Col md={6} className="donate-instruction">
							<p>
								We partner with the non-profit organization, Skep Foundation to
								accept donations. Skep Foundation is a national 501(c)(3)
								organization that provides philanthropic service across Africa.
							</p>

							<p>
								* Please indicate that the donation is for{" "}
								<strong>Inclusion Afrika</strong> in the note.
							</p>
							<p>
								Click{" "}
								<a
									href="https://www.zeffy.com/en-US/donation-form/e930534d-e885-4508-8723-21b86797617c"
									target="_blank"
									rel="noopener noreferrer"
								>
									here
								</a>{" "}
								to donate now.
							</p>
						</Col>
					</Row>
				</Modal.Body>
				<ModalFooter>
					<p className="tax-info">
						* <small>All your donations are tax deductible</small>
					</p>
				</ModalFooter>
			</Modal>
		</>
	);
};

export default DonateButton;
