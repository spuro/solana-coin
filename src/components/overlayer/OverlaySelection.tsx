import React from "react";

const OverlaySelection = ({ overlays, onOverlaySelect }) => {
  return (
    <div className="flex justify-center space-x-4">
      {overlays.map((overlay, index) => (
        <img
          key={index}
          src={overlay}
          alt={`Overlay ${index + 1}`}
          onClick={() => onOverlaySelect(overlay)}
          className="h-24 w-24 cursor-pointer object-cover"
        />
      ))}
    </div>
  );
};

export default OverlaySelection;
