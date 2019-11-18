import React from "react";
import "./ImageGallery.scss";

const ImageGallery = ({ gallery }) => {
  return (
    <div>
      {gallery.map((image_item, index) => {
        return (
          <div key={index} className="project-image">
            <img src={image_item.project_image.url} alt="preject" />
          </div>
        );
      })}
    </div>
  );
};
export default ImageGallery;
