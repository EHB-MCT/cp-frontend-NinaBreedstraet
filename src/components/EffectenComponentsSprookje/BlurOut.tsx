import { motion } from "framer-motion";
import { useBlurOut } from "../../hooks/useBlurOut";

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
