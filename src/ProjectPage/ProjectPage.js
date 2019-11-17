import React, { useState, useEffect } from "react";
import PrismicReact from "prismic-reactjs";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ImageGallery from "../ImageGallery";

const ProjectPage = ({ match, prismicCtx }) => {
  const [project, setProject] = useState();

  useEffect(() => {
    if (!prismicCtx) return;

    prismicCtx.api.getByUID("project", match.params.uid).then((doc, error) => {
      setProject(doc);
    });
  }, [prismicCtx]);

  return (
    <div>
      <Header />
      {project && (
        <div className="project-container">
          <img src={project.data.project_banner.url} />
          <h4 className="thumbnail-title">
            {PrismicReact.RichText.render(project.data.project_title)}
          </h4>
          <span className="">
            {PrismicReact.RichText.render(project.data.project_type)}
          </span>
          <p>
            {PrismicReact.RichText.render(project.data.project_description)}
          </p>
          <ImageGallery gallery={project.data.project_images} />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ProjectPage;
