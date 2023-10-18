import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import About from "./pages/About";
import Initiative from "./pages/Initiative";
import GetInvolved from "./pages/GetInvolved";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/initiative" element={<Initiative />} />
				<Route path="/getinvolved" element={<GetInvolved />} />
			</Routes>
		</>
	);
}

export default App;
