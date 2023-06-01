import { useState } from "react";
import "../css/Diapo.css";

export default function Diapo({ accomodation }) {
    // On initialise currentImageIndex à 0, qui est utilisé dans la src de l'image. La src affiche donc par défaut la première image du talbeau, l'image 0.
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    // En appuyant sur un bouton, on change la valeur de currentImageIndex avec setCurrentImageIndex. Si c'est = à 0 ou au max, on revient à la fin ou au début.
    const previousImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? accomodation.pictures.length - 1 : prevIndex - 1
      );
    };
  
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === accomodation.pictures.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    // S'il n'y a qu'une seule image, on ne montre pas les boutons de navigation
    if (accomodation.pictures.length === 1) {
      return (<div className="carrousel"><img src={accomodation.pictures[currentImageIndex]} alt={accomodation.title} /></div>);}
  
    return (
      <div className="carrousel">
        <img
          src={accomodation.pictures[currentImageIndex]}
          alt={accomodation.title}
        />
        <button onClick={previousImage} className="previous button">
          Précédent
        </button>
        <button onClick={nextImage} className="next button">
          Suivant
        </button>
        <div className="pictureNumber">
          {currentImageIndex + 1}/{accomodation.pictures.length}
        </div>
      </div>
    );
  }