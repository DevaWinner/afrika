import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import OurOrganization from "./pages/OurOrganization";
import OurTeam from "./pages/OurTeam";
import Initiative from "./pages/Initiative";
import GetInvolved from "./pages/GetInvolved";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	return (
		<>
			<Navbar />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about/organization" element={<OurOrganization />} />
					<Route path="/about/team" element={<OurTeam />} />
					<Route path="/initiative" element={<Initiative />} />
					<Route path="/getinvolved" element={<GetInvolved />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
