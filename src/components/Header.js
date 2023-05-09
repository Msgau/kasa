import '../css/header/header.css'
import logo from '../assets/LOGO.png'


export default function Header() {
    return (
      <header>
        <Logo />
        <Menu />
      </header>
    );
  }
  
  
function Logo(){
    return (<img src={logo} alt="logo" id="logo" />
    )
  }
  
function Menu(){
    return <nav>
      <div><a href='#'>Accueil</a></div>
      <div><a href='#'>A propos</a></div>
    </nav>
  }