import type {
  MouseEvent,
  ReactNode,
} from "react";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";


interface MagnetProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}


export default function Magnet({
  children,
  strength = 12,
  className = "",
}: MagnetProps) {

  const reduceMotion =
    useReducedMotion();

  const x =
    useMotionValue(0);

  const y =
    useMotionValue(0);


  const springX =
    useSpring(x, {
      stiffness: 180,
      damping: 18,
      mass: 0.4,
    });

  const springY =
    useSpring(y, {
      stiffness: 180,
      damping: 18,
      mass: 0.4,
    });


  const handleMouseMove = (
    event: MouseEvent<HTMLDivElement>,
  ) => {

    if (reduceMotion) {
      return;
    }

    const rect =
      event.currentTarget.getBoundingClientRect();

    const centerX =
      rect.left +
      rect.width / 2;

    const centerY =
      rect.top +
      rect.height / 2;


    const distanceX =
      event.clientX -
      centerX;

    const distanceY =
      event.clientY -
      centerY;


    x.set(
      distanceX / strength,
    );

    y.set(
      distanceY / strength,
    );
  };


  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };


  return (
    <motion.div
      className={className}

      onMouseMove={
        handleMouseMove
      }

      onMouseLeave={
        handleMouseLeave
      }

      style={
        reduceMotion
          ? undefined
          : {
              x: springX,
              y: springY,
            }
      }
    >
      {children}
    </motion.div>
  );
}