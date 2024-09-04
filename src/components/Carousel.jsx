import React, { useState } from "react";
import arrowLeft from "../assets/svg/arrow-left.svg";
import arrowRight from "../assets/svg/arrow-right.svg";

const Carousel = ({ data }) => {
  const { pictures } = data;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <img
        src={arrowLeft}
        alt="Afficher l'image précédente"
        onClick={handlePrev}
        className="arrow-left"
      />
      <img
        src={arrowRight}
        alt="Afficher l'image suivante"
        onClick={handleNext}
        className="arrow-right"
      />

      <img
        src={pictures[currentIndex]}
        alt={`Image n°${currentIndex}`}
        className="carousel-cover"
      />
    </div>
  );
};

export default Carousel;
