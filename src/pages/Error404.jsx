import "../css/Error404.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";
export default function Error404() {
  return (
    <div>
      <Header />
      <div id="error404">
        <div id="number404">404</div>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <div>
          <Link to="/">Retourner à la page d'accueil</Link>
        </div>
      </div>
    </div>
  );
}
