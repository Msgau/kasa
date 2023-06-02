import "../css/Gallery.css";
import logements from "../data/logements.json";
import { Link } from 'react-router-dom'

export default function Gallery() {
  const blockStyle = {
    background:
      "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%)",
  };

  return (
    <div className="backgroundGallery">
    <ul className="Gallery">
      {logements.map((logement) => (
        <li key={logement.id}>
          <Link to={`/rooms/${logement.id}`}><div className="Gallery__block" style={blockStyle}>
            <div className="Gallery__block__class2">
              <img className="Gallery__block__image" src={logement.cover} alt={logement.title} />
              <h2 className="Gallery__block__title">{logement.title}</h2>
            </div>
          </div></Link>
        </li>
      ))}
    </ul>
    </div>
  );
}
