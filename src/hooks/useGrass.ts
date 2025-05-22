import { useRef } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

export const useGrass = (): {
  ref: React.RefObject<HTMLParagraphElement>;
  refImg: React.RefObject<HTMLImageElement>;
  grassY: MotionValue<number>;
  grassTwoY: MotionValue<number>;
  textY: MotionValue<number>;
  blurAmount: MotionValue<number>;
} => {
  const ref = useRef<HTMLParagraphElement>(null!);
  const refImg = useRef<HTMLImageElement>(null!);

  const { scrollYProgress } = useScroll();

  const { scrollYProgress: scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const { scrollYProgress: grassScrollY } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const grassY = useTransform(scrollY, [0.2, 1], [0, -10]);

  const grassTwoY = useTransform(grassScrollY, [0, 0.7], [0, -200]);

  const textY = useTransform(scrollY, [0.5, 1], [0, -150]);

  const blurAmount = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.5],
    [2, 0, 0, 2]
  );

  return { ref, refImg, grassY, textY, blurAmount, grassTwoY };
};
