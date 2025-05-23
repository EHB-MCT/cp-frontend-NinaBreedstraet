import { motion, useTransform, MotionValue } from "framer-motion";

interface Props {
  scrollYProgress: MotionValue<number>;
  children: React.ReactNode;
}

export const BlurOut7 = ({ scrollYProgress, children }: Props) => {
  const opacity = useTransform(scrollYProgress, [0, 0.96, 1, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0.6, 1], [0, -50]);

  return (
    <motion.p
      style={{
        opacity,
        y,
        position: "absolute",
        zIndex: 3,
        color: "white",
        width: "20rem",
        marginTop: "-47rem",
        marginLeft: "5rem",
      }}
      transition={{ duration: 0.8 }}
      className="text"
    >
      {children}
    </motion.p>
  );
};
