import React, { useState, useEffect } from "react";
import PrismicReact from "prismic-reactjs";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ImageGallery from "../ImageGallery/ImageGallery";
import RelatedProject from "../RelatedProject/RelatedProject";
import "./ProjectPage.scss";

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
        <div>
          <div className="project-banner">
            <img src={project.data.project_banner.url} alt="banner" />
          </div>
          <div className="project-content">
            <span className="project-title">
              {PrismicReact.RichText.render(project.data.project_title)}
            </span>
            <div className="project-content-aligned">
              <p className="project-description">
                {PrismicReact.RichText.render(project.data.project_description)}
              </p>
              <span className="project-type">
                {PrismicReact.RichText.render(project.data.project_type)}
              </span>
            </div>
            <ImageGallery gallery={project.data.project_images} />
          </div>
        </div>
      )}
      <div class="related-projects-section">
        <span className="thumbnail-title">Related projects:</span>
        <RelatedProject />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectPage;
