import '../css/header/header.css'
import logo from '../assets/LOGO.png'
import Menu from './Menu';

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
  
