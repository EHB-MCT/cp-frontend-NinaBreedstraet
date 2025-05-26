import { MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const useBlurOutScene3 = (): {
  sceneRef: React.RefObject<HTMLElement | null>;
  scrollYProgress: MotionValue<number>;
  fishX: MotionValue<string>;
  blurFilter: MotionValue<string>;
  grassY: MotionValue<number>;
  img1Opacity: MotionValue<number>;
  img1Y: MotionValue<number>;
  img2Opacity: MotionValue<number>;
  img2Y: MotionValue<number>;
  img3Opacity: MotionValue<number>;
  img3Y: MotionValue<number>;
  woman: MotionValue<number>;
  womanOpacity: MotionValue<number>;
  blurAmount: MotionValue<number>;
  yLelies: MotionValue<number>;
} => {
  const sceneRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  const fishX = useTransform(scrollYProgress, [0.8, 1], ["-20%", "200%"]);

  const grassY = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const blurAmount = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.5],
    [1, 0, 0, 0]
  );
  const blurFilter = useTransform(blurAmount, (value) => `blur(${value}px)`);

  const img1Opacity = useTransform(
    scrollYProgress,
    [0.01, 0.11, 0.21],
    [0, 1, 0]
  );
  const img1Y = useTransform(scrollYProgress, [0.01, 0.21], [50, 0]);
  const img2Opacity = useTransform(
    scrollYProgress,
    [0.21, 0.31, 0.41],
    [0, 1, 0]
  );
  const img2Y = useTransform(scrollYProgress, [0.21, 0.41], [50, 0]);
  const img3Opacity = useTransform(
    scrollYProgress,
    [0.41, 0.51, 0.61],
    [0, 1, 0]
  );
  const img3Y = useTransform(scrollYProgress, [0.41, 0.61], [50, 0]);
  const woman = useTransform(scrollYProgress, [0.01, 0.21], [50, 0]);
  const womanOpacity = useTransform(
    scrollYProgress,
    [0.01, 0.11, 0.21],
    [0, 0, 1]
  );

  const yLelies = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return {
    blurFilter,
    img1Y,
    img2Y,
    img3Y,
    img1Opacity,
    img2Opacity,
    img3Opacity,
    grassY,
    woman,
    womanOpacity,
    sceneRef,
    blurAmount,
    scrollYProgress,
    fishX,
    yLelies,
  };
};
