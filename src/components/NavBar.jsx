import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import DonateButton from "./DonateButton";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useEffect, useState } from "react";

const NavBar = () => {
	const [scrolled, setScrolled] = useState(false);

	const closeNavbar = () => {
		const navbarToggler = document.querySelector(".navbar-toggler");
		if (navbarToggler && window.innerWidth < 992) {
			navbarToggler.click();
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 0;
			setScrolled(isScrolled);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			{["lg"].map((expand) => (
				<Navbar
					key={expand}
					expand={expand}
					className={`bg-white header ${scrolled ? "scrolled" : ""}`}
					style={{ zIndex: 1001 }}
					sticky="top"
				>
					<Container className="header">
						<Navbar.Brand className="logo">
							<NavLink to="/">
								<img
									src="https://inclusionafrika.imgix.net/logo.jpg"
									className="img-fluid"
									alt="Inclusion Afrika Logo"
								/>
							</NavLink>
						</Navbar.Brand>
						<div className="donate mobile">
							<DonateButton />
						</div>
						<Navbar.Toggle
							aria-controls={`offcanvasNavbar-expand-${expand}`}
							className="shadow-none border-0"
						/>
						<Navbar.Offcanvas
							id={`offcanvasNavbar-expand-${expand}`}
							aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
							placement="end"
							style={{
								backgroundColor: "var(--primary-color)",
								width: "80%",
								height: "90%",
								backdropFilter: "blur(20px)",
								color: "yellow",
								borderRadius: "0 0 0 20px",
								border: "none",
							}}
						>
							<Offcanvas.Body>
								<Nav className="justify-content-center flex-grow-1 mobile">
									<NavLink
										to="/"
										className="nav-link"
										activeClassName="active"
										onClick={closeNavbar}
									>
										Home
									</NavLink>
									<NavDropdown
										title="About Us"
										id="basic-nav-dropdown"
										className="nav-link"
									>
										<NavDropdown.Item
											as={NavLink}
											to="/organization"
											activeClassName="active"
											onClick={closeNavbar}
										>
											Our Organization
										</NavDropdown.Item>
										<NavDropdown.Item
											as={NavLink}
											to="/team"
											activeClassName="active"
											onClick={closeNavbar}
										>
											Our Team
										</NavDropdown.Item>
									</NavDropdown>
									<NavLink
										to="/initiative"
										className="nav-link"
										activeClassName="active"
										onClick={closeNavbar}
									>
										Initiatives
									</NavLink>
									<NavLink
										to="/getinvolved"
										className="nav-link"
										activeClassName="active"
										onClick={closeNavbar}
									>
										Get Involved
									</NavLink>
								</Nav>
								<div className="donate">
									<DonateButton />
								</div>
							</Offcanvas.Body>
						</Navbar.Offcanvas>
					</Container>
				</Navbar>
			))}
		</>
	);
};

export default NavBar;
