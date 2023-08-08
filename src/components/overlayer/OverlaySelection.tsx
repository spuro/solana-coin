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
    <div className="flex flex-col justify-start gap-2 sm:flex-row lg:flex-col">
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
          <p className="text-left lg:min-w-[200px]">{overlay.name}</p>
        </div>
      ))}
    </div>
  );
};

export default OverlaySelection;
