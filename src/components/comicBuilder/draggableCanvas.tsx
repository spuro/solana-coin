import React from "react";
import { Stage, Layer, Rect } from "react-konva";

const DraggableCanvas = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Rect
          x={20}
          y={20}
          width={100}
          height={100}
          fill="red"
          draggable={true}
        />
      </Layer>
    </Stage>
  );
};

export default DraggableCanvas;
