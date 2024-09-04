import React from "react";
import { Link } from "react-router-dom";

const RentThumb = ({ id, title, cover }) => {
  return (
    <Link to={`/logement/${id}`}>
      <div className="rentthumb">
        <img src={cover} alt={title} />
        <h2>{title}</h2>
      </div>
    </Link>
  );
};
export default RentThumb;
