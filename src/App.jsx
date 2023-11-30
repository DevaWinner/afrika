import React from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Home from "./pages/Home";
import OurOrganization from "./pages/OurOrganization";
import OurTeam from "./pages/OurTeam";
import Initiative from "./pages/Initiative";
import GetInvolved from "./pages/GetInvolved";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	return (
		<>
			<main>
				<ScrollToTop smooth color="var(--primary-color)" />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/organization" element={<OurOrganization />} />
					<Route path="/team" element={<OurTeam />} />
					<Route path="/initiative" element={<Initiative />} />
					<Route path="/getinvolved" element={<GetInvolved />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
