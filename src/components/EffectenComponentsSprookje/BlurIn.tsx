import { motion } from "framer-motion";
import { useBlurIn } from "../../hooks/useBlurIn";

export const BlurIn = ({ children }: { children: React.ReactNode }) => {
  const { ref, opacity } = useBlurIn();

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
