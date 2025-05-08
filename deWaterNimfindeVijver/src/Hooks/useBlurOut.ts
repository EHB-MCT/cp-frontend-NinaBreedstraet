// useBlurOut.ts
import { useRef } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

export const useBlurOut = (): {
  ref: React.RefObject<HTMLParagraphElement>;
  opacity: MotionValue<number>;
} => {
  const ref = useRef<HTMLParagraphElement>(null!); // <- Let op het type

  const { scrollYProgress } = useScroll({ target: ref });
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3],
    [0, 1, 1, 0]
  );

  return { ref, opacity };
};
