import '../css/header/header.css'
import logo from '../assets/LOGO.png'
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
    return <nav>
      <ul>
        <Link to="/"><li>Accueil</li></Link>
        <Link to="/about"><li>A propos</li></Link>
        </ul>
    </nav>
  }