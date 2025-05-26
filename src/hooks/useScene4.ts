import { MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const useBlurOutScene4 = (): {
  sceneRef: React.RefObject<HTMLElement | null>;
  scrollYProgress: MotionValue<number>;
  opacity: MotionValue<number>;
  opacityPeople: MotionValue<number>;
  yLelies: MotionValue<number>;
  opacityLelies: MotionValue<number>;
} => {
  const sceneRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.01, 0.1, 0.3],
    [0, 1, 1, 0]
  );

  const opacityPeople = useTransform(
    scrollYProgress,
    [0, 0.5, 0.5, 0.6],
    [0, 1, 1, 0]
  );

  const yLelies = useTransform(scrollYProgress, [0, 0.5], [50, 0]);
  const opacityLelies = useTransform(
    scrollYProgress,
    [0, 0.01, 0.3, 0.5],
    [0.3, 1, 1, 0]
  );

  return {
    sceneRef,
    scrollYProgress,
    opacity,
    opacityPeople,
    yLelies,
    opacityLelies,
  };
};
