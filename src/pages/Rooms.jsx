import { useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import logements from "../data/logements.json";
import Header from "../components/Header";
import unroll from "../images/icons/VectorDown.png";
import rollUp from "../images/icons/VectorUp.png";
import "../css/Rooms.css";

export default function Rooms() {
  // On relie la page à l'objet dans le json à l'aide de l'url de la page qui contient son id
  const { id } = useParams();
  const accomodation = logements.find((accomodation) => accomodation.id === id);
  // Si l'url ne coincide avec aucun id ==> 404. on utilise Navigate et non Link car on est dans du js.
  if (!accomodation) {
    return <Navigate to="/404" />;
  }

  //  Affichage de la page

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

function HeadDescription({ accomodation }) {
  //  Séparation Prénom/Nom : méthode split(' ') pour diviser le nom de l'hôte en mots individuels. Cela crée un tableau hostNameWords contenant tous les mots du nom de l'hôte.
  const hostNameWords = accomodation.host.name.split(" ");
  // Nous récupérons le premier mot du tableau en utilisant hostNameWords[0].
  const firstWord = hostNameWords[0];
  // nous utilisons hostNameWords.slice(1).join(' ') pour récupérer les mots restants du nom de l'hôte après le premier mot (grâce à slice) et les séparer par un espace grâce à join.
  const remainingWords = hostNameWords.slice(1).join(" ");

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    // On génère les cinq étoiles
    const starClass = i <= accomodation.rating ? "star filled" : "star"; // Pour chaque étoile, tant que i est inférieur à la note, on attribue à l'étoile la classe "star filled". Ensuite, on lui attribue la classe "star".
    stars.push(<div key={i} className={starClass}></div>);
  }

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
      <div className="headContainer second">
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
        {/* Les étoiles sont ajoutées via CSS */}
        <div className="accomodationRating">{stars}</div>
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
        {showDescription && <p className={`${showDescription ? 'visible' : 'invisible'}`}>{accomodation.description}</p>}
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
        {showEquipements && (
          <ul className="accomodationEquipments">
            {showEquipements &&
              accomodation.equipments.map((equipment, index) => (
                <li key={index} className="accomodationEquipment">
                  {equipment}
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
}
