import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";
import Header from "../components/Header";
import { useState } from "react";
import unroll from "../assets/icons/VectorDown.png";
import rollUp from "../assets/icons/VectorUp.png";
import "../css/Rooms.css"

export default function Rooms() {
  const { id } = useParams();
  const accomodation = logements.find((accomodation) => accomodation.id === id);

  if (!accomodation) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="rooms">
      <Header />
      <Diapo accomodation={accomodation} />
      <HeadDescription accomodation={accomodation} />
      <BodyDescription accomodation={accomodation} />
    </div>
  );
}

function Diapo({ accomodation }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  return (
    <div className="carousel">
      <img
        src={accomodation.pictures[currentImageIndex]}
        alt={accomodation.title}
      />
      <button onClick={previousImage}>Previous</button>
      <button onClick={nextImage}>Next</button>
    </div>
  );
}

function HeadDescription({ accomodation }) {
    //  Séparation Prénom/Nom : méthode split(' ') pour diviser le nom de l'hôte en mots individuels. Cela crée un tableau hostNameWords contenant tous les mots du nom de l'hôte.
    const hostNameWords = accomodation.host.name.split(' ');
    // Nous récupérons le premier mot du tableau en utilisant hostNameWords[0].
    const firstWord = hostNameWords[0];
    // nous utilisons hostNameWords.slice(1).join(' ') pour récupérer les mots restants du nom de l'hôte après le premier mot (grâce à slice) et les séparer par un espace grâce à join.
    const remainingWords = hostNameWords.slice(1).join(' ');
  
    return (
      <div className="accomodation">
        <div className="headContainer">
          <h2 className="accomodationTitle">{accomodation.title}</h2>
          <h3 className="accomodationLocation">{accomodation.location}</h3>
          <div className="accomodationtags">
            {accomodation.tags.map((tag, index) => (
              <p key={index} className="accomodationtag">
                {tag}
              </p>
            ))}
          </div>
        </div>
        <div className="headContainer">
          <div className="accomodationHost">
            <h4 className="accomodationHostName">
                {/* Dans le JSX, nous affichons le premier mot séparément dans une balise <span> avec la classe firstWord. Cela nous permettra d'appliquer un style CSS spécifique au premier mot, ici display:block pour le séparer de remainingWordsqui contient tous els autres mots. */}
              <span className="firstWord">{firstWord}</span> {remainingWords}
            </h4>
            <img
              className="accomodationHostPicture"
              src={accomodation.host.picture}
              alt={"Photo de " + accomodation.host.name}
            />
          </div>
          <div>Note : {accomodation.rating}/5</div>
        </div>
      </div>
    );
  }
  

function BodyDescription({ accomodation }) {
    const [showDescription, setShowDescription] = useState(false);
    const [showEquipements, setShowEquipements] = useState(false);
    return (
      <div className="bodyDescription">
        <div className="bodyContainer">
          <h5 onClick={() => setShowDescription(!showDescription)}>
            Description
            <img
              src={showDescription ? rollUp : unroll}
              alt="dérouler fiabilité"
              className="arrowDown"
            />
          </h5>
          {showDescription && <p>{accomodation.description}</p>}
        </div>
        <div className="bodyContainer">
          <h5 onClick={() => setShowEquipements(!showEquipements)}>
            Equipements
            <img
              src={showEquipements ? rollUp : unroll}
              alt="dérouler fiabilité"
              className="arrowDown"
            />
          </h5>
          {showEquipements && 
          <ul className="accomodationEquipments">{showEquipements && accomodation.equipments.map((equipment, index) => (
            
              <li key={index} className="accomodationEquipment">{equipment}</li>
            
          ))}</ul>}
        </div>
      </div>
    );
  }
  