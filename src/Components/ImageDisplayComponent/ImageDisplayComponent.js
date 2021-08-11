import React from "react";
import "./ImageDisplayComponent.css";

const ImageDisplayComponent = ({ imageList }) => {
  return (
    <div className="image-display-container">
      {imageList.map((image, index) => {
        return (
          <div className="single-image" key={index}>
            <img
              src={image || "http://via.placeholder.com/100x75"}
              alt={`${index}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageDisplayComponent;
