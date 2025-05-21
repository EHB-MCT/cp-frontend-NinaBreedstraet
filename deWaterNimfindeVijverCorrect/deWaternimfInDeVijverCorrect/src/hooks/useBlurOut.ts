import { useRef } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

export const useBlurOut = (): {
  ref: React.RefObject<HTMLParagraphElement>;
  opacity: MotionValue<number>;
  opacityTwo: MotionValue<number>;
  opacityThree: MotionValue<number>;
  opacityFour: MotionValue<number>;
  textY: MotionValue<number>;
} => {
  const ref = useRef<HTMLParagraphElement>(null!);

  const { scrollYProgress } = useScroll({ target: ref });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3],
    [0, 1, 1, 0]
  );

  const opacityTwo = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3, 0.5],
    [0, 0.1, 1, 0]
  );

  const opacityThree = useTransform(scrollYProgress, [0.1, 0.5], [1, 1]);

  const opacityFour = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5, 0.6],
    [0, 0.5, 1, 0]
  );

  const textY = useTransform(scrollYProgress, [0.5, 1], [0, -150]);

  return { ref, opacity, opacityTwo, opacityThree, opacityFour, textY };
};
