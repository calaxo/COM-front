// Home.js

import React from "react";
import accueil from "@assets/accueil.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <h1>
        Bienvenue sur notre site de robots de défense contre les incendies et
        autre incident climatiques
      </h1>
      <div className="feature">
        <img src="path/to/ai_robot_image.jpg" alt="Robot AI" />
        <h2>Intelligence Artificielle Avancée</h2>
        <p>l'entrepsir fondée en 2010. numero pompier materiel</p>
      </div>

      <div className="feature">
        <img src={accueil} alt="Robot AI" />
        <h2>Intelligence Artificielle Avancée</h2>
        <p>
          utilise l'ia pour amelioer la securité et l'eficatié des pompier. car
          de moin en moins de personnel alors qu'il y a de plus en plus de
          catastrphoe qui on besoin de pompier du au rechaufement climatique
        </p>
      </div>

      <div className="feature">
        <img src="path/to/ai_robot_image.jpg" alt="Robot AI" />
        <h2>Intelligence Artificielle Avancée</h2>
        <p>
          Un robot doté d'une intelligence artificielle avancée pour prendre des
          décisions en temps réel en fonction des données environnementales et
          des besoins des équipes de lutte contre les incendies. Il pourrait
          s'adapter aux situations changeantes et optimiser les stratégies
          d'extinction pour minimiser les dommages.
        </p>
      </div>

      <div className="feature">
        {/* <img src={carteimg} alt="Conditions Extrêmes" /> */}
        <h2>Résistance aux Conditions Extrêmes</h2>
        <p>
          Les robots sont conçus pour résister aux conditions extrêmes afin de
          garantir leur fonctionnement optimal dans des environnements
          difficiles.
        </p>
      </div>

      <div className="feature">
        {/* Répète la structure pour les autres caractéristiques */}
      </div>

      <button>Explorer nos robots</button>
    </div>
  );
};

export default Home;
