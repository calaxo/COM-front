import { createRoot } from "react-dom/client";
import "@styles/index.css";
import "@styles/accueil.css";
import "@styles/page.css";

import Page404 from "@pages/Page404";

import {
  HashRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";

import Accueil from "@pages/Accueil.jsx";

import Drone from "@pages/Drone.jsx";
import Serpent from "@pages/Serpent";
import Gaz from "@pages/Gaz";
import Recherche from "@pages/Recherche";

import Condition from "@pages/Condition.jsx";

function App() {
  const navigationLinkStylesBut = ({ isActive }) => ({
    color: isActive ? "#black" : "#2f343d",
    fontSize: "1.2em",
    background: isActive ? "white" : "#05f140",
    borderRadius: "10px", // Ajout de la bordure arrondie
    border: "3px solid #2cda9d",
  });

  const navigationLinkStylesBase = ({ isActive }) => ({
    color: isActive ? "#black" : "#2f343d",
    fontSize: "1.2em",

    borderRadius: "10px", // Ajout de la bordure arrondie
    border: "3px solid #2cda9d",
  });

  const navigationLinks = [
    {
      to: "/Accueil",
      text: "Accueil",
      class: "btnheader",
      style: navigationLinkStylesBase,
    },

    {
      to: "/Drone",
      text: "Drone",
      class: "btnheader",
      style: navigationLinkStylesBut,
    },
    {
      to: "/Serpent",
      text: "Serpent",
      class: "btnheader",
      style: navigationLinkStylesBut,
    },
    {
      to: "/Gaz",
      text: "Gaz",
      class: "btnheader",
      style: navigationLinkStylesBut,
    },
    {
      to: "/Recherche",
      text: "Recherche",
      class: "btnheader",
      style: navigationLinkStylesBut,
    },
  ];

  return (
    <Router>
      <div className="header">
        <NavLink to="/Accueil" className="logo">
          <div className="titre">NATUREEDYNAMICS SOLUTION</div>
        </NavLink>
        <div className="header-right">
          <div className="nav-links">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={`${link.class} rounded-button nav-link`}
                style={link.style}
              >
                {link.text}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/Accueil" />} />
          <Route path="/Accueil" element={<Accueil />} />

          <Route path="/Drone" element={<Drone />} />
          <Route path="/Serpent" element={<Serpent />} />
          <Route path="/Gaz" element={<Gaz />} />
          <Route path="/Recherche" element={<Recherche />} />
          <Route path="/Condition" element={<Condition />} />

          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>

      <footer className="footer">
        <p>Site © 2023</p>
        <NavLink to="/Condition">Condition légales</NavLink>
      </footer>
    </Router>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
