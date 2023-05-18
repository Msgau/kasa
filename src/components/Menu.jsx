import { Link } from 'react-router-dom'


export default function Menu(){
    return <nav>
      <ul>
        <Link to="/"><li>Accueil</li></Link>
        <Link to="/about"><li>A propos</li></Link>
        </ul>
    </nav>
  }