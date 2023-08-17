import React, { useEffect, useRef, useState } from "react";
import { Overlay } from "~/pages/overlayer";

interface ResultPreviewProps {
  file: File | null;
  overlay: Overlay | null;
  showPfp: boolean;
  setShowPfp: (showPfp: boolean) => void;
  setCropperActive: (cropperActive: boolean) => void;
}
const ResultPreview = ({
  file,
  overlay,
  showPfp,
  setShowPfp,
  setCropperActive,
}: ResultPreviewProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    let ctx: CanvasRenderingContext2D | null;
    if (canvas) {
      ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.fillStyle = "#e0e";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }

    // Clear the canvas and set the placeholder

    if (file && overlay) {
      const img = new Image();
      img.onload = () => {
        // Check if the image is square or within 5% of being square
        const aspectRatio = img.width / img.height;
        if (aspectRatio < 0.95 || aspectRatio > 1.05) {
          setCropperActive(true);
          return;
        }

        // Scale the canvas to the image size
        canvas!.width = img.width;
        canvas!.height = img.height;

        ctx!.drawImage(img, 0, 0);

        const overlayImg = new Image();
        overlayImg.onload = () => {
          ctx!.drawImage(overlayImg, 0, 0, img.width, img.height);
        };
        overlayImg.src = overlay.src;

        const pfpImg = new Image();
        pfpImg.onload = () => {
          ctx!.drawImage(pfpImg, 0, 0, img.width, img.height);
        };
        pfpImg.src = showPfp ? "/images/overlays/pfp_view.png" : "";
      };
      img.src = URL.createObjectURL(file);
    }
  }, [file, overlay, showPfp]);

  const handleDownload = () => {
    // Create an off-screen canvas of 1024x1024 for exporting
    const offscreenCanvas = document.createElement("canvas");
    offscreenCanvas.width = 1024;
    offscreenCanvas.height = 1024;
    const offscreenCtx = offscreenCanvas.getContext("2d");
    offscreenCtx!.drawImage(canvasRef.current!, 0, 0, 1024, 1024);

    // Export the image from the off-screen canvas
    const dataUrl = offscreenCanvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "output.png";
    link.click();
  };

  return (
    <div className="relative flex flex-col items-center">
      <canvas
        ref={canvasRef}
        className="relative left-0 top-0 z-40 aspect-square h-full max-h-[512px] w-full max-w-[512px]"
      ></canvas>
      <p>preview will appear when both an image and overlay are chosen</p>
      <div className="flex flex-row gap-8">
        <button
          onClick={handleDownload}
          className="cursor-pointer rounded-md border-2 border-red-300 bg-red-600 px-4 py-2 hover:bg-red-800"
        >
          Download
        </button>
        <button
          className="cursor-pointer rounded-md border-2 border-red-300 bg-red-600 px-4 py-2 hover:bg-red-800"
          onClick={() => {
            setShowPfp(!showPfp);
          }}
        >
          Toggle PFP Frame
        </button>
      </div>
    </div>
  );
};

export default ResultPreview;
