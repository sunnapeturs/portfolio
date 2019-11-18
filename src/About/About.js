import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PrismicReact from "prismic-reactjs";
import "./About.scss";

const aboutPage = ({ prismicCtx }) => {
  const [content, setContent] = useState();

  useEffect(() => {
    if (!prismicCtx) return;

    prismicCtx.api.getSingle("about-page").then((doc, error) => {
      setContent(doc);
    });
  }, [prismicCtx]);

  return (
    <div>
      <Header />
      {content && (
        <div className="about-container">
          <div className="image">
            <img
              src={content.data.profile_img.url}
              alt={content.data.profile_img.alt}
            />
          </div>
          <div className="text">
            <p>{PrismicReact.RichText.asText(content.data.about_txt)}</p>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default aboutPage;
