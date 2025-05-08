import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const BlurIn = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.02], [1, 0]);

  return (
    <motion.p
      ref={ref}
      style={{ opacity: opacity }}
      transition={{ duration: 1.2 }}
    >
      {children}
    </motion.p>
  );
};
