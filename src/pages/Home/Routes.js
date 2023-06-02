import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "../../components/Footer.js";
import Home from './Home.jsx';
import About from '../About.jsx';
import Error404 from '../Error404.jsx';
import Rooms from '../Rooms.jsx';
import '../../css/Index.css'
import Toggle from "../../components/toogle.js"

function RouteConfiguration() {

  return (
    <div className="page-container">
    <div className="content-wrap">
    
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/*" element={<Error404 />} />
          <Route path="/about" element={<About />} />
          <Route path='/rooms/:id' element={<Rooms />} />
        </Routes>
      </Router>

    </div>
    <Toggle />
    <Footer />
  </div>
  );
}

export default RouteConfiguration;
