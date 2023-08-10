import React from "react";
import { Overlay } from "~/pages/overlayer";

interface OverlaySelectionProps {
  overlays: Overlay[];
  onOverlaySelect: (overlay: Overlay) => void;
}
const OverlaySelection = ({
  overlays,
  onOverlaySelect,
}: OverlaySelectionProps) => {
  return (
    <div className="sm:max-h-500px flex h-[525px] w-full flex-col justify-start gap-2 overflow-y-scroll sm:flex-row sm:overflow-x-scroll lg:max-h-[750px] lg:w-1/3 lg:flex-col lg:overflow-y-scroll">
      {overlays.map((overlay: Overlay, index: number) => (
        <div
          key={index}
          className="flex flex-row gap-2 bg-red-700/50 sm:flex-col lg:flex-row"
        >
          <img
            src={overlay.src}
            alt={`Overlay ${index + 1}`}
            onClick={() => onOverlaySelect(overlay)}
            className="h-36 w-36 cursor-pointer bg-black/80 object-cover hover:bg-black/60"
          />
          <p className="w-full min-w-[200px] text-left lg:min-w-[200px]">
            {overlay.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default OverlaySelection;
