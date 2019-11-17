import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Frontpage.scss";

const Frontpage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="hero-container">
          <h1 className="h1 heading-primary">
            Welcome! I am Sunna a web/graphic<br></br>
            designer based in Reykjavík
          </h1>
        </div>
        <div className="card-container">
          <ProjectCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Frontpage;
