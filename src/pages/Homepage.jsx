import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import homepageBanner from "../assets/img/homepage-banner.png";
import logements from "../data/logements";
import RentThumb from "../components/RentThumb";

const Homepage = () => {
  return (
    <div className="homepage">
      <Nav />
      <Banner
        src={homepageBanner}
        alt="Image montrant un paysage avec des falaises près de la mer"
        text="Chez vous, partout et ailleurs"
      />
      <div className="rentthumb-box">
        {logements.map((logement) => (
          <RentThumb
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
