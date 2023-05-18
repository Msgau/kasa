import "../css/Gallery.css";
import logements from "../data/logements.json";

export default function Gallery() {
  const blockStyle = {
    background:
      "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%)",
  };

  return (
    <ul className="Gallery">
      {logements.map((logement) => (
        <li key={logement.id}>
          <div className="block" style={blockStyle}>
            <img src={logement.cover} alt={logement.title} />
            <h2>{logement.title}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
}
