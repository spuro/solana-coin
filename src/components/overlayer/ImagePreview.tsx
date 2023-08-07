import React from "react";

const ImagePreview = ({ file }) => {
  const url = file ? URL.createObjectURL(file) : null;

  return <div>{url && <img src={url} alt="Preview" />}</div>;
};

export default ImagePreview;
