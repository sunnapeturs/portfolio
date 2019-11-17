import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import PrismicReact from "prismic-reactjs";

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
          <img
            src={content.data.profile_img.url}
            alt={content.data.profile_img.alt}
          />
          <p>{PrismicReact.RichText.asText(content.data.about_txt)}</p>
        </div>
      )}
    </div>
  );
};

export default aboutPage;
