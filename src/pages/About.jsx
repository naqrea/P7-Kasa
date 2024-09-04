import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import aboutBanner from "../assets/img/about-banner.png";
import Collapse from "../components/Collapse";

const About = () => {
  return (
    <div className="about">
      <Nav />
      <Banner
        src={aboutBanner}
        alt="Image montrant un paysage avec une forêt au premier plan, une rivière avec des montagnes en arrière-plan"
      />
      <div className="collapse-box">
        <Collapse
          collapseTitle="Fiabilité"
          collapseContent="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        />
        <Collapse
          collapseTitle="Respect"
          collapseContent="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Collapse
          collapseTitle="Service"
          collapseContent="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Collapse
          collapseTitle="Sécurité"
          collapseContent="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
      <Footer />
    </div>
  );
};

export default About;
