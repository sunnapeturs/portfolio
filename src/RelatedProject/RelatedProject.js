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
  return (
    <div className="r-project-cards">
      {project &&
        project.slice(0, 3).map((project, index) => {
          return (
            <div key={index} className="r-project-card">
              <Link to={"/" + project.uid}>
                <img
                  src={project.data.thumbnail.url}
                  alt="thumbnail"
                  className="thumbnail"
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
