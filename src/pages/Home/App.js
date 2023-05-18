import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "../../components/Header.js"
import Footer from "../../components/Footer.js";
import Home from './Home';
import About from '../About.jsx';
import Error404 from '../Error404.jsx';

function App() {
  return (

    <div className="page-container">
    <div className="content-wrap">
    
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/*" element={<Error404 />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
    
    <Footer />
  </div>

  );
}

export default App;
