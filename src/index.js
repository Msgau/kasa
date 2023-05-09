
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import About from './pages/About.jsx';
import Error404 from './pages/Error404.jsx';
import './css/Index.css';


// import { browserRouter as Router, Routes, Route} from 'react-router-dom'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/*" element= {<Error404 />} />
        <Route path="/about" element = {<About />} />
      </Routes>
    </Router>
  </React.StrictMode>
)