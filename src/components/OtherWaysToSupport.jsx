import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import "../styles/ContactForm.css"; // Import a CSS file for custom styling

const SupportForm = () => {
	const [formData, setFormData] = useState({
		fname: "",
		lname: "",
		email: "",
		phone: "",
		donationType: "",
		message: "",
	});

	const [showToast, setShowToast] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		// Perform form submission logic here

		// Axios logic for form submission
		axios({
			method: "POST",
			url: "https://your-api-endpoint.com", // Replace with your actual API endpoint
			headers: { "Content-Type": "application/json" },
			data: formData,
		})
			.then((response) => {
				console.log("Form submitted successfully", response);
				setShowToast(true);
				// Clear form fields after successful submission
				setFormData({
					fname: "",
					lname: "",
					email: "",
					phone: "",
					donationType: "",
					message: "",
				});
			})
			.catch((error) => {
				console.error("Error submitting form", error);
			});
	};

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
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
						value={formData.fname}
						onChange={handleChange}
					/>
				</Col>
				<Col>
					<label htmlFor="lname">Last Name</label>
					<input
						type="text"
						name="lname"
						id="lname"
						className="form-control p-2"
						value={formData.lname}
						onChange={handleChange}
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
						value={formData.email}
						onChange={handleChange}
					/>
				</Col>
				<Col>
					<label htmlFor="phone">Phone Number</label>
					<input
						type="text"
						name="phone"
						id="phone"
						className="form-control p-2"
						value={formData.phone}
						onChange={handleChange}
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
						value={formData.donationType}
						onChange={handleChange}
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
						value={formData.message}
						onChange={handleChange}
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
							For larger donations or other kinds of donations, please contact
							us directly by filling out the form below.
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
