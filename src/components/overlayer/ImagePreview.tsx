import React from "react";

interface ImagePreviewProps {
  file: File | null;
}
const ImagePreview = ({ file }: ImagePreviewProps) => {
  const url = file ? URL.createObjectURL(file) : null;

  return (
    <div className="h-[100px] w-[100px]">
      {url && <img src={url} alt="Preview" />}
    </div>
  );
};

export default ImagePreview;
