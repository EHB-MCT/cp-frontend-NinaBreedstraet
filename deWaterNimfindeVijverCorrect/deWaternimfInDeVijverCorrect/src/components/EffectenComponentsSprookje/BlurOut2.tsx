import { motion } from "framer-motion";
import { useBlurOut } from "../../hooks/useBlurOut";

export const BlurOut2 = ({ children }: { children: React.ReactNode }) => {
  const { ref, opacityTwo } = useBlurOut();

  return (
    <motion.p
      ref={ref}
      style={{ opacity: opacityTwo }}
      transition={{ duration: 9.2 }}
      className="text"
    >
      {children}
    </motion.p>
  );
};
