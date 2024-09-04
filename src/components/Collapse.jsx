import React, { useState } from "react";
import chevronDown from "../assets/svg/chevron-down.svg";

const Collapse = ({ collapseTitle, collapseContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <h2>{collapseTitle}</h2>
        <img
          src={chevronDown}
          className={isOpen ? "chevron-down" : "chevron-up"}
          alt={`Ouvrir le détail du menu ${collapseTitle}`}
        />
      </div>
      <div className={`collapse-content ${isOpen ? "collapse-open" : ""}`}>
        <p>{collapseContent}</p>
      </div>
    </div>
  );
};

export default Collapse;
