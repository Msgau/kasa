import '../css/header/header.css'
import logo from '../images/LOGO.png'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
      <header> 
        <Logo />
        <Menu />
      </header>
    );
  }
  
  
function Logo(){
    return (<div className='homeHeader'><Link to="/"><img src={logo} alt="logo" id="logo" /></Link></div>
    )
  }
  
function Menu(){
    return <nav className='navbar'>
      <ul>
        <Link to="/" className='navbar__link'><li>Accueil</li></Link>
        <Link to="/about" className='navbar__link'><li>A propos</li></Link>
        </ul>
    </nav>
  }