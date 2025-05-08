// hooks/useBlurIn.ts
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export const useBlurIn = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const opacity = useTransform(scrollYProgress, [0, 0.02], [1, 0]);

  return { ref, opacity };
};
