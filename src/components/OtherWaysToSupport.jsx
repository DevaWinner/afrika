import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "../styles/ContactForm.css"; // Import a CSS file for custom styling

const SupportForm = () => {
	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<Form onSubmit={handleSubmit} className="support-form d-flex flex-column">
			<Row className="mb-3">
				<Col>
					<label htmlFor="fname">First Name</label>
					<input
						type="text"
						name="fname"
						id="fname"
						className="form-control p-2"
					/>
				</Col>
				<Col>
					<label htmlFor="lname">Last Name</label>
					<input
						type="text"
						name="lname"
						id="lname"
						className="form-control p-2"
					/>
				</Col>
			</Row>
			<Row className="mb-3">
				<Col>
					<label htmlFor="email">Email Address</label>
					<input
						type="email"
						name="email"
						id="email"
						className="form-control p-2"
					/>
				</Col>
				<Col>
					<label htmlFor="phone">Phone Number</label>
					<input
						type="text"
						name="phone"
						id="phone"
						className="form-control p-2"
					/>
				</Col>
			</Row>
			<Row className="mb-3">
				<Col>
					<label htmlFor="donationType">
						What donation type are you interested in?
					</label>
					<select
						name="donationType"
						id="donationType"
						className="form-control p-2"
						required
					>
						<option value="">Select...</option>
						<option value="check">Donation via Check</option>
						<option value="stock">Give Stock</option>
						<option value="volunteer">Volunteer</option>
						<option value="other">Other</option>
					</select>
				</Col>
			</Row>
			<Row className="mb-4">
				<Col>
					<label htmlFor="message">Message</label>
					<textarea
						name="message"
						id="message"
						rows="4"
						placeholder="Enter your message"
						className="form-control p-2"
						required
					></textarea>
				</Col>
			</Row>

			<button type="submit" className="button align-self-center">
				Submit
			</button>
		</Form>
	);
};

const OtherWaysToSupport = () => {
	return (
		<section className="contact-container bg-light text-dark container top">
			<Container>
				<Row>
					<Col md={6} className="text-container p-5 rounded">
						<h2 className="mb-3">Other Ways to Support</h2>
						<p className="mb-4">
							For larger donations or other kind of donations, please contact us
							directly by filling out the form below.
						</p>
					</Col>
					<Col md={6} className="bg-white p-4 rounded shadow">
						<SupportForm />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default OtherWaysToSupport;
