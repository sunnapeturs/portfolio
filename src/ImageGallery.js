import React from "react";

const ImageGallery = ({ gallery }) => {
  return (
    <div>
      {gallery.map((image_item, index) => {
        return (
          <div key={index}>
            <img src={image_item.project_image.url} />
          </div>
        );
      })}
    </div>
  );
};
export default ImageGallery;
