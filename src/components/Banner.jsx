import React from "react";

const Banner = ({ src, alt, text }) => {
  return (
    <div className="banner">
      <img src={src} alt={alt} />
      {text && <h1>{text}</h1>}
    </div>
  );
};

export default Banner;
