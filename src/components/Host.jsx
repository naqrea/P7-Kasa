import React from "react";

const Host = ({ data }) => {
  const { host } = data;

  return (
    <div className="host">
      <p>{host.name}</p>
      <img src={host.picture} alt="Photo de l'hôte" className="host-picture" />
    </div>
  );
};

export default Host;
