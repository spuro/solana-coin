import React, { useEffect, useRef } from "react";

const ResultPreview = ({ file, overlay }) => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Clear the canvas and set the placeholder
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#e0e0e0";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (file && overlay) {
      const img = new Image();
      img.onload = () => {
        // Scale the canvas to the image size
        canvas.width = img.width;
        canvas.height = img.height;

        ctx.drawImage(img, 0, 0);

        const overlayImg = new Image();
        overlayImg.onload = () => {
          ctx.drawImage(overlayImg, 0, 0, img.width, img.height);
        };
        overlayImg.src = overlay;
      };
      img.src = URL.createObjectURL(file);
    }
  }, [file, overlay]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const dataUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "output.png";
    link.click();
  };

  return (
    <div>
      <canvas ref={canvasRef} width="512" height="512"></canvas>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default ResultPreview;
