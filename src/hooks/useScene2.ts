import { MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const useBlurOutScene2 = (): {
  sceneRef: React.RefObject<HTMLElement | null>;
  scrollYProgress: MotionValue<number>;
  blurAmount: MotionValue<number>;
  blurFilter: MotionValue<string>;
  opacity: MotionValue<number>;
  grassY: MotionValue<number>;
} => {
  const sceneRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  const blurAmount = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.5],
    [0, 0, 0, 1]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.01, 0.1, 0.3],
    [0, 1, 1, 0]
  );

  const grassY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const blurFilter = useTransform(blurAmount, (value) => `blur(${value}px)`);

  return { blurFilter, opacity, grassY, sceneRef, blurAmount, scrollYProgress };
};
