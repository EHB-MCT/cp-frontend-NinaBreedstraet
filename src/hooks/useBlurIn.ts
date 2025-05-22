import { useRef } from "react";
import { MotionValue, useScroll, useTransform } from "framer-motion";

export const useBlurIn = (): {
  ref: React.RefObject<HTMLParagraphElement>;
  opacity: MotionValue<number>;
} => {
  const ref = useRef<HTMLParagraphElement>(null!);
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.02], [1, 0]);

  return { ref, opacity };
};
