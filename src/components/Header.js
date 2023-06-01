import "../css/header/header.css";
import logo from "../images/LOGO.png";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Logo />
      <Menu />
    </header>
  );
}

function Logo() {
  return (
    <div className="homeHeader">
      <Link to="/">
        <img src={logo} alt="logo" id="logo" />
      </Link>
    </div>
  );
}

function Menu() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" style={{ 
              textDecoration: location.pathname === "/" ? "underline" : "none"
            }}>
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" style={{
              textDecoration: location.pathname === "/about" ? "underline" : "none"
            }}>
            A propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
