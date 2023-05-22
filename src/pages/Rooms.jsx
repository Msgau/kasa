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
  return (
    <div>
      <div>
        <h2 className="accomodationTitle">{accomodation.title}</h2>
        <h3 className="accomodationLocation">{accomodation.location}</h3>
        {accomodation.tags.map((tag, index) => (
          <div key={index}>
            <p className="accomodationtags">{tag}</p>
          </div>
        ))}
      </div>
      <div>
        <h4 className="accomodationHostName">{accomodation.host.name}</h4>
        <div>
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
  