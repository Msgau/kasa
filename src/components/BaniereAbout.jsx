import '../css/BaniereAbout.css'

import React, { useState } from 'react';

export default function BaniereAbout() {
  // We set the <p> at "false"
  const [showFiabilite, setShowFiabilite] = useState(false);
  const [payRespect, setPayRespect] = useState(false);
  const [showService, setShowService] = useState(false);
  const [showSecurite, setShowSecurite] = useState(false);


  // Onclick, we change the state of <p> to his opposite (true if false, false if true)
  return (
    <div className='about'> 
      <div className='baniereAbout'></div>
      <h2 onClick={() => setShowFiabilite(!showFiabilite)}>Fiabilité</h2>
      {showFiabilite && <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, 
          et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>}
      <h2 onClick={() => setPayRespect(!payRespect)}>Respect</h2>
      {payRespect && <p>La bienveillance fait partie des valeurs fondatrices de Kasa. 
          Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>}
      <h2 onClick={() => setShowService(!showService)}>Service</h2>
      {showService && <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
          N'hésitez pas à nous contacter si vous avez la moindre question.</p>}
      <h2 onClick={() => setShowSecurite(!showSecurite)}>Sécurité</h2>
      {showSecurite && <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
          chaque logement correspond aux critères de sécurité établis par nos services. 
          En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
          Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>}
    </div>
  );
}
