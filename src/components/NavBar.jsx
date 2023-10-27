import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import logo from "/assets/inclusion.gif";
import "../styles/NavBar.css";

const NavBar = () => {
	const closeNavbar = () => {
		const navbarToggler = document.querySelector(".navbar-toggler");
		if (navbarToggler && window.innerWidth < 992) {
			navbarToggler.click();
		}
	};

	return (
		<>
			{["lg"].map((expand) => (
				<Navbar key={expand} expand={expand} className="bg-white">
					<Container className="header">
						<Navbar.Brand href="#" style={{ width: "220px", height: "auto" }}>
							<img
								src={logo}
								className="img-fluid"
								alt="Inclusion Afrika Logo"
							/>
						</Navbar.Brand>
						<Navbar.Toggle
							aria-controls={`offcanvasNavbar-expand-${expand}`}
							className="shadow-none border-0"
						/>
						<Navbar.Offcanvas
							id={`offcanvasNavbar-expand-${expand}`}
							aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
							placement="end"
							style={{
								backgroundColor: "rgba(255, 255, 255, 0.1)",
								width: "80%",
								backdropFilter: "blur(20px)",
								color: "white",
							}}
						>
							<Offcanvas.Body>
								<Nav className="justify-content-center flex-grow-1 mobile">
									<NavLink
										to="/"
										className="nav-link "
										activeClassName="active"
										onClick={closeNavbar}
									>
										Home
									</NavLink>
									<NavLink
										to="/about"
										className="nav-link"
										activeClassName="active"
										onClick={closeNavbar}
									>
										About Us
									</NavLink>
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
									<Button variant="secondary" className="mobile-button justify">
										Donate
									</Button>
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
