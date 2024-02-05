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
import Layout from './Layout'


function App() {
  return (
    <div className = "App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="About" element={<About/>}/>
          <Route path="Contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </div>  
  );
}

export default App;
