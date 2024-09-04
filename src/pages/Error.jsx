import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <Nav></Nav>
      <div className="error-content">
        <h1>404</h1>
        <p> Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="link">
          Retourner sur la page d'accueil
        </Link>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Error;
