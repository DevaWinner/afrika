import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import About from "./pages/About";
import Initiative from "./pages/Initiative";
import GetInvolved from "./pages/GetInvolved";
import Footer from "./components/Footer";
import "./App.css"

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
      <Footer />
		</>
	);
}

export default App;
