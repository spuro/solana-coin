import React, { useState, useEffect } from "react";
import { useDrag } from "react-use-gesture";

const SpinningWheel = () => {
  const [angle, setAngle] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [prevTime, setPrevTime] = useState(Date.now());
  const [direction, setDirection] = useState(1); // 1 for clockwise, -1 for anti-clockwise

  // Use drag event to capture the initial spin speed and direction
  const bind = useDrag(({ vxvy: [vx, vy], movement: [mx, my], down }) => {
    const newSpeed = Math.sqrt(vx * vx + vy * vy);
    setSpeed(down ? newSpeed : speed);

    // Detect the direction of the drag by comparing it with the center
    if (down) {
      setDirection(mx > 0 ? 1 : -1);
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - prevTime;
      setPrevTime(currentTime);

      if (speed > 0.01) {
        setSpeed(speed * 0.98); // 0.98 is the friction factor
      } else {
        setSpeed(0);
      }

      setAngle((prev) => (prev + direction * speed * deltaTime) % 360);
    }, 10); // Update every 10 milliseconds

    return () => clearInterval(interval);
  }, [speed, prevTime, direction]);

  return (
    <svg {...bind()} width="500" height="500">
      <circle
        cx="250"
        cy="250"
        r="200"
        stroke="black"
        strokeWidth="4"
        fill="transparent"
      />
      <text
        x="250"
        y="250"
        textAnchor="middle"
        dominantBaseline="middle"
        transform={`rotate(${angle}, 250, 250)`}
      >
        Spinning Wheel
      </text>
    </svg>
  );
};

export default SpinningWheel;
