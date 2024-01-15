// SnakeRobotPage.js




import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";

import React from 'react';
import pyroguard from '@assets/pyroguard.png';
const Serpent = () => {
  return (
    <div className="product-sheet-container">
<div className="product-sheet-info">
<h1>Robot Serpent Anti-Incendie</h1>
<p>
Le Robot Serpent Anti-Incendie est une solution tout-terrain innovante conçue pour lutter efficacement contre les incendies. Doté de fonctionnalités avancées, il représente une avancée majeure dans la protection de l'environnement et de la faune.
</p>
</div>

php
Copy code
  <div className="product-sheet-image">
    <img src={pyroguard} alt="Robot Serpent Anti-Incendie" />
  </div>

  <div className="product-sheet-prix">

    <p>
      20 000€ TTC
    </p>

  </div>

  <div className="product-sheet-features">
    <h2>Fonctionnalités Notables</h2>
    <ul>
      <li>Bras articulés pour abattre les arbres en feu</li>
      <li>Pelle pour creuser des tranchées coupe-feu</li>
      <li>Technologie de détection avancée pour localiser les feux</li>
      <li>Adaptation des bras robotiques pour le sauvetage de la faune</li>
      <li>Forme de serpent pour agilité et résistance</li>
      <li>Capacité d'auto-réparation en cas de dommages</li>
      <li>Transport de fournitures essentielles pour les équipes sur le terrain</li>
      <li>Lutte contre les incendies aquatiques</li>
      <li>Autonomie grâce à des panneaux solaires / générateurs à énergie renouvelable</li>
      <li>IA avancée pour des décisions en temps réel et adaptation aux situations</li>
      <li>Vision nocturne et infrarouge pour des opérations de nuit et la localisation des animaux en danger</li>
    </ul>
  </div>

  <div className="product-sheet-summary">
    <h2>Résumé</h2>
    <p>
      Le Robot Serpent Anti-Incendie va au-delà de la simple lutte contre les incendies. Grâce à ses bras articulés polyvalents, il peut abattre les arbres en feu et adapter ses mouvements pour secourir la faune en danger. Sa forme de serpent lui confère une agilité exceptionnelle, lui permettant de naviguer efficacement à travers des zones boisées difficiles d'accès.
    </p>
    <p>
      Sa capacité d'auto-réparation le rend durable, capable de survivre dans des environnements hostiles sans intervention humaine constante. De plus, il peut transporter des fournitures essentielles, lutter contre les incendies aquatiques et rester opérationnel grâce à son alimentation en énergie renouvelable.
    </p>
    <p>
      Doté d'une IA avancée, de la vision nocturne et infrarouge, le Robot Serpent Anti-Incendie excelle dans la prise de décisions en temps réel, adaptant ses stratégies pour minimiser les dommages tout en continuant ses opérations de nuit pour la protection des animaux.
    </p>
  </div>

  <NavLink to="/Ficheserpent" className="buy-now-btn">
    <button>Acheter Maintenant</button>
  </NavLink>
</div>
);
};

export default Serpent;
