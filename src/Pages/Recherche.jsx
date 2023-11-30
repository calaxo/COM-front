// RobotPage.js

import React from "react";
// Importe le fichier CSS

const Recherche = () => {
  return (
    <div className="robot-page-container">
      <div className="robot-info">
        <h1>Robot chercheur de personne en danger</h1>
        <p>sous les decombre suite a problmeme climatique</p>
      </div>

      <div className="robot-image">
        <img
          src="path/to/firefighting_robot_image.jpg"
          alt="Robot de Lutte Contre les Incendies"
        />
      </div>

      <div className="robot-features">
        <h2>Fonctionnalités Notables</h2>
        <ul>
          <li>Capacité de déploiement de drones de reconnaissance aérienne</li>
          <li>Reconnaissance avancée des zones touchées par les incendies</li>
          <li>Extinction des flammes depuis les airs</li>
          {/* Ajoute d'autres fonctionnalités au besoin */}
        </ul>
      </div>

      <div className="robot-swarm">
        <h2>Essaim de Robots Autonomes</h2>
        <p>
          Un essaim de robots autonomes travaillant ensemble pour lutter contre
          les incendies. Chaque robot possède des compétences spécialisées,
          comme l'extinction des flammes, la création de barrières coupe-feu ou
          la surveillance des zones touchées par le feu. Ils communiquent entre
          eux pour coordonner leurs efforts et maximiser l'efficacité de
          l'intervention.
        </p>
      </div>

      <button>Acheter Maintenant</button>
    </div>
  );
};

export default Recherche;
