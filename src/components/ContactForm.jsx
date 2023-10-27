import { Container, Row, Col, Form } from "react-bootstrap";
import "../styles/ContactForm.css";

const ContactForm = () => {
	return (
		<section className="contact-container top container ">
			<Container>
				<Row className="contact">
					<Col md={6} className="form flex column">
						<div className="text d-flex">
							<div className="title d-flex">
								<h2>Contact us</h2>
								<hr />
							</div>
							<p>
								Thank you for your interest, and we are happy to answer any
								questions. Please fill this short form, and we will get back to
								you as soon as possible.
							</p>
						</div>
						<Form className="form-fill d-flex flex-column">
							<Row className="mb-3">
								<Col>
									<label htmlFor="fname">First Name</label>
									<input
										type="text"
										name="fname"
										id="fname"
										className="form-control"
									/>
								</Col>
								<Col>
									<label htmlFor="lname">Last Name</label>
									<input
										type="text"
										name="lname"
										id="lname"
										className="form-control"
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
										className="form-control"
									/>
								</Col>
								<Col>
									<label htmlFor="phone">Phone Number</label>
									<input
										type="text"
										name="phone"
										id="phone"
										className="form-control"
									/>
								</Col>
							</Row>
							<Row className="mb-3">
								<Col>
									<label htmlFor="message">Message</label>
									<textarea
										name="message"
										id="message"
										rows="6"
										placeholder="Send us a message"
										className="form-control"
									></textarea>
								</Col>
							</Row>

							<button type="submit" className="button">
								Submit
							</button>
						</Form>
						<p className="agreement">
							* By submitting this form, you agree to our{" "}
							<strong>privacy policy</strong>
						</p>
					</Col>
					<Col md={6} className="address d-flex flex-column">
						<h3 className="form-heading">Get Connected</h3>
						<p>
							You can also reach us anytime through the following medium, and we
							will be available to answer your questions
						</p>
						<ul className="address-items">
							<li>
								<i className="fa-solid fa-map-location"></i>
								<p>123 Main Street, Cityville, Anytown, USA</p>
							</li>
							<li>
								<i className="fa-solid fa-phone"></i>
								<p>
									+1 (814) 619-5491 <br /> +233 24 716 8781
								</p>
							</li>
							<li>
								<i className="fa-solid fa-envelope"></i>
								<p>info@inclusionafrika.com</p>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default ContactForm;
