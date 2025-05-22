import { motion, useTransform, MotionValue } from "framer-motion";

interface Props {
  scrollYProgress: MotionValue<number>;
  children: React.ReactNode;
}

export const BlurOut3 = ({ scrollYProgress, children }: Props) => {
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.01, 0.1, 0.3],
    [0, 1, 1, 0]
  );
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  return (
    <motion.p
      style={{
        opacity,
        y,
        position: "relative",
        zIndex: 3,
        color: "white",
        width: "30rem",
        marginLeft: "6rem",
        marginTop: "-45rem",
      }}
      transition={{ duration: 0.8 }}
      className="text"
    >
      {children}
    </motion.p>
  );
};
