import type {
  ReactNode,
} from "react";

import {
  motion,
  useReducedMotion,
} from "motion/react";


interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
}


export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = "",
}: FadeInProps) {

  const reduceMotion =
    useReducedMotion();


  return (
    <motion.div
      className={className}

      initial={
        reduceMotion
          ? { opacity: 1 }
          : {
              opacity: 0,
              x,
              y,
            }
      }

      whileInView={
        reduceMotion
          ? { opacity: 1 }
          : {
              opacity: 1,
              x: 0,
              y: 0,
            }
      }

      viewport={{
        once: true,
        amount: 0.15,
      }}

      transition={{
        duration,
        delay,
        ease: [
          0.25,
          0.1,
          0.25,
          1,
        ],
      }}
    >
      {children}
    </motion.div>
  );
}