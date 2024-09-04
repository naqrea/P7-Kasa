import React from "react";

const Rating = ({ data }) => {
  const { rating } = data;
  const totalStars = 5;

  return (
    <div className="rating">
      {[...Array(totalStars)].map((_, index) => (
        <span key={index} className={index < rating ? "star filled" : "star"}>
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
