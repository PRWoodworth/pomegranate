import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import About from  './Pages/About';
import Contact from  './Pages/Contact';
import Navbar from "./Components/Navbar";


function App() {
	return (
		<div className = "App">
			<Router>
				<Navbar />
				<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/Contact" element={<Contact />} />
				</Routes>
			</Router>
		</div>  
	);
}

export default App;
