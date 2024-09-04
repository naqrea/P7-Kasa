import React, { useEffect } from "react";
import Footer from "../components/Footer";
import { useParams, useNavigate } from "react-router-dom";
import logements from "../data/logements";
import Carousel from "../components/Carousel";
import Nav from "../components/Nav";
import Host from "../components/Host";
import Collapse from "../components/Collapse";
import Tag from "../components/Tag";
import Rating from "../components/Rating";

const Rent = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialiser useNavigate
  const logement = logements.find((logement) => logement.id === id);

  useEffect(() => {
    if (!logement) {
      navigate("/error"); // Rediriger vers la page d'erreur
    }
  }, [logement, navigate]);

  if (!logement) {
    return null; // Retourner null pendant la redirection
  }

  return (
    <div className="rent">
      <Nav></Nav>
      <div className="rent-content">
        <Carousel data={{ pictures: logement.pictures }} />
        <div className="header">
          <div className="title">
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
          </div>
          <Host data={{ host: logement.host }} />
        </div>
        <div className="tags-and-rating">
          <div className="tags">
            {logement.tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
          <Rating data={{ rating: logement.rating }} />
        </div>
        <div className="collapses">
          <Collapse
            collapseTitle="Description"
            collapseContent={logement.description}
          />
          <Collapse
            collapseTitle="Equipements"
            collapseContent={logement.equipments}
          />
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Rent;
