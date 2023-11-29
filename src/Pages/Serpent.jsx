// SnakeRobotPage.js

import React from 'react';
import pyroguard from '@assets/pyroguard.png';
const Serpent = () => {
  return (
    <div className="robot-page-container">
      <div className="robot-info">
        <h1>Robot Serpent Anti-Incendie</h1>
        <p>
          Un robot tout-terrain capable de lutter contre les incendies de différentes manières. Il pourrait avoir des bras articulés pour abattre les arbres en feu, une pelle pour creuser des tranchées coupe-feu, et même une technologie de détection avancée pour localiser les feux dans les zones épaisses de la forêt.
        </p>
      </div>

      <div className="robot-image">
        <img src={pyroguard} />
      </div>

      <div className="robot-features">
        <h2>Fonctionnalités Notables</h2>
        <ul>
          <li>Bras articulés pour abattre les arbres en feu</li>
          <li>Pelle pour creuser des tranchées coupe-feu</li>
          <li>Technologie de détection avancée</li>
          {/* Ajoute d'autres fonctionnalités au besoin */}
        </ul>
      </div>

      <div className="robot-swarm">
        <h2>Robot Serpent Agile et Résistant</h2>
        <p>
          Un robot serpent agile et résistant, équipé de buses d'extinction, pourrait se faufiler à travers les zones boisées difficiles d'accès. Il pourrait grimper aux arbres pour atteindre les feux dans les cimes et éteindre les flammes à des endroits inaccessibles aux humains.
        </p>
      </div>

      <button>Acheter Maintenant</button>
    </div>
  );
};

export default Serpent;
