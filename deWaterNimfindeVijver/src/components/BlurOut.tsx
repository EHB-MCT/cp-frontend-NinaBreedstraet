import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useBlurOut } from "Hooks/useBlurOut";

export const BlurOut = ({ children }: { children: React.ReactNode }) => {
  const { ref, opacity } = useBlurOut();

  return (
    <motion.p
      ref={ref}
      style={{ opacity: opacity }}
      transition={{ duration: 1.2 }}
      className="text"
    >
      {children}
    </motion.p>
  );
};
