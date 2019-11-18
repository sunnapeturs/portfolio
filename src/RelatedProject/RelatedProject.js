import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Prismic from "prismic-javascript";
import PrismicReact from "prismic-reactjs";
import "./RelatedProject.scss";

const RelatedProject = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    Prismic.api("https://sunna-portfolio.prismic.io/api/v2").then(api => {
      const projectPred = Prismic.Predicates.at("document.type", "project");
      api.query(projectPred).then(response => {
        setProject([...response.results]);
      });
    });
  }, []);
  console.log(project.slice(1));
  return (
    <div className="r-project-cards">
      {project &&
        project.slice(0, 3).map((project, index) => {
          return (
            <div key={index} className="r-project-card">
              <Link to={"/" + project.uid}>
                <img
                  src="https://static.wixstatic.com/media/749b71_82e2110ef8a5491e9583735a26e1e698~mv2.jpg/v1/fill/w_1408,h_1002,al_c,q_90/749b71_82e2110ef8a5491e9583735a26e1e698~mv2.webp"
                  className="thumbnail"
                  alt="thumbnail"
                ></img>
                <h4 className="thumbnail-title">
                  {PrismicReact.RichText.render(project.data.project_title)}
                </h4>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default RelatedProject;
