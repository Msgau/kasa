import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";
import Header from "../components/Header";
import Diapo from "../components/Diapo";
import HostId from "../components/HostId";
import Tag from "../components/Tag";
import Grade from "../components/Grade";
import HiddenContent from "../components/HiddenContent.js";
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

function HeadDescription({ accomodation }) {
  return (
    <div className="accomodation">
      <div className="headContainer">
        <h2 className="accomodationTitle">{accomodation.title}</h2>
        <h3 className="accomodationLocation">{accomodation.location}</h3>
      <Tag accomodation={accomodation} />
      </div>
      <div className="headContainer second">
        <HostId accomodation={accomodation}/>
        <Grade rating={accomodation.rating} />
      </div>
    </div>
  );
}

function BodyDescription({ accomodation }) {

  
  return (
    <div className="bodyDescription">
      <HiddenContent 
      collapseTitle= {<h5>Description</h5>} 
      collapseDescription = {<p>{accomodation.description}</p>}
      />
      <HiddenContent 
      collapseTitle= {<h5>Equipements</h5>} 
      collapseDescription = {<ul className="accomodationEquipments">
      {accomodation.equipments.map((equipment, index) => (
          <li key={index} className="accomodationEquipment">
            {equipment}
          </li>
        ))}
    </ul>}
      />
    </div>
  );
}
