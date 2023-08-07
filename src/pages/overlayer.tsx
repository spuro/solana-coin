import React, { useState } from "react";
import FileUpload from "~/components/overlayer/FileDrop";
import ImagePreview from "~/components/overlayer/ImagePreview";
import OverlaySelection from "~/components/overlayer/OverlaySelection";
import ResultPreview from "~/components/overlayer/ResultPreview";

const overlays = [
  "/overlays/overlay1.png",
  // "/overlays/overlay2.png",
  // "/overlays/overlay3.png",
];

const MyComponent = () => {
  const [file, setFile] = useState(null);
  const [selectedOverlay, setSelectedOverlay] = useState(null);

  const handleFileUpload = (uploadedFile) => {
    setFile(uploadedFile);
  };

  const handleOverlaySelect = (overlay) => {
    setSelectedOverlay(overlay);
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <OverlaySelection
        overlays={overlays}
        onOverlaySelect={handleOverlaySelect}
      />
      <FileUpload onFileUpload={handleFileUpload} />
      <ImagePreview file={file} />
      <ResultPreview file={file} overlay={selectedOverlay} />
    </div>
  );
};

export default MyComponent;
