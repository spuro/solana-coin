import React, { useRef, useState, useEffect } from "react";

interface ImageCropperProps {
  inputFile: File | null;
  onCropped: (file: File) => void;
  setCropperActive: (cropperActive: boolean) => void;
}

const ImageCropper: React.FC<ImageCropperProps> = ({
  inputFile,
  onCropped,
  setCropperActive,
}) => {
  if (inputFile) {
    const [src, setSrc] = useState<string | null>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);
    const [selection, setSelection] = useState<{
      x: number;
      y: number;
      width: number;
      height: number;
    } | null>(null);
    const [startPoint, setStartPoint] = useState<{
      x: number;
      y: number;
    } | null>(null);

    const loadImage = () => {
      const reader = new FileReader();
      reader.onload = (e) => setSrc(e.target?.result as string);
      reader.readAsDataURL(inputFile as File);
    };

    const startSelecting = (e: React.MouseEvent<HTMLImageElement>) => {
      const x = e.nativeEvent.offsetX;
      const y = e.nativeEvent.offsetY;
      setStartPoint({ x, y });
      // Start with a 0-sized square
      setSelection({ x, y, width: 0, height: 0 });
    };

    const whileSelecting = (e: React.MouseEvent<HTMLImageElement>) => {
      if (!startPoint) return;

      let width = e.nativeEvent.offsetX - startPoint.x;
      let height = e.nativeEvent.offsetY - startPoint.y;

      // Determine the smallest dimension to force a square selection
      const size = Math.min(Math.abs(width), Math.abs(height));
      width = size * (width < 0 ? -1 : 1); // This keeps the direction of dragging (left or right)
      height = size * (height < 0 ? -1 : 1); // This keeps the direction of dragging (up or down)

      setSelection({
        x: startPoint.x,
        y: startPoint.y,
        width,
        height,
      });
    };

    const endSelecting = () => {
      if (selection && imageRef.current) {
        const canvas = document.createElement("canvas");
        canvas.width = 1024;
        canvas.height = 1024;
        const ctx = canvas.getContext("2d");

        ctx?.drawImage(
          imageRef.current,
          selection.x,
          selection.y,
          selection.width,
          selection.height,
          0,
          0,
          1024,
          1024
        );

        canvas.toBlob((blob) => {
          if (blob) {
            const file = new File([blob], "cropped-image.jpeg", {
              type: "image/jpeg",
            });
            onCropped(file);
          }
        }, "image/jpeg");

        setStartPoint(null);
        setSelection(null);
      }
      setCropperActive(false);
    };

    useEffect(() => {
      loadImage();
    }, [inputFile]);

    return (
      <div>
        {src && (
          <img
            ref={imageRef}
            src={src}
            draggable={false}
            onMouseDown={startSelecting}
            onMouseMove={whileSelecting}
            onMouseUp={endSelecting}
            style={{
              position: "relative",
              cursor: "crosshair",
            }}
          />
        )}

        {selection && (
          <div
            style={{
              position: "absolute",
              top: selection.y,
              left: selection.x,
              width: selection.width,
              height: selection.height,
              border: "2px dashed red",
              boxSizing: "border-box",
            }}
          ></div>
        )}
      </div>
    );
  }
};

export default ImageCropper;
