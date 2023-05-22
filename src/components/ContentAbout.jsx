import "../css/ContentAbout.css";
import React, { useState } from "react";

import unroll from "../assets/icons/VectorDown.png";
import rollUp from "../assets/icons/VectorUp.png";

export default function BaniereAbout() {
  const [showFiabilite, setShowFiabilite] = useState(false);
  const [showRespect, setShowRespect] = useState(false);
  const [showService, setShowService] = useState(false);
  const [showSecurite, setShowSecurite] = useState(false);

  return (
    <div className="about">
      <div className="baniereAbout"></div>

      <h2 onClick={() => setShowFiabilite(!showFiabilite)}>
        Fiabilité
        <img
          src={showFiabilite ? rollUp : unroll}
          alt="dérouler fiabilité"
          className="arrowDown"
        />
      </h2>
      {showFiabilite && (
        <p>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </p>
      )}

      <h2 onClick={() => setShowRespect(!showRespect)}>
        Respect
        <img
          src={showRespect ? rollUp : unroll}
          alt="dérouler respect"
          className="arrowDown"
        />
      </h2>
      {showRespect && (
        <p>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
      )}

      <h2 onClick={() => setShowService(!showService)}>
        Service
        <img
          src={showService ? rollUp : unroll}
          alt="dérouler service"
          className="arrowDown"
        />
      </h2>
      {showService && (
        <p>
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N'hésitez pas à nous contacter si vous avez la
          moindre question.
        </p>
      )}

      <h2 onClick={() => setShowSecurite(!showSecurite)}>
        Sécurité
        <img
          src={showSecurite ? rollUp : unroll}
          alt="dérouler sécurité"
          className="arrowDown"
        />
      </h2>
      {showSecurite && (
        <p>
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </p>
      )}
    </div>
  );
}
