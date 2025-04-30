import { useRef} from "react";
import { motion, useScroll, useTransform } from "framer-motion";


export const BlurOut = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll();

    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3], [0, 1, 1, 0]);
    
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