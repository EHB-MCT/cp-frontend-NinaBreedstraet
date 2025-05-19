import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const OverlayCopy = ({ subHeading }: any) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [400, -400]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.5], [0, 1, 0]);

  return (
    <motion.div
      ref={targetRef}
      className="overlayContainer"
      style={{ y, opacity }}
    >
      <p className="overlaySubHeading text">{subHeading}</p>
    </motion.div>
  );
};
