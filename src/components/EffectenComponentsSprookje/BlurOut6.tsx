import { motion, useTransform, MotionValue } from "framer-motion";

interface Props {
  scrollYProgress: MotionValue<number>;
  children: React.ReactNode;
}

export const BlurOut6 = ({ scrollYProgress, children }: Props) => {
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3, 0.4],
    [0, 1, 1, 0]
  );
  const y = useTransform(scrollYProgress, [0.2, 0.1], [0, -50]);

  return (
    <motion.p
      style={{
        opacity,
        y,
        position: "absolute",
        zIndex: 3,
        color: "white",
        width: "30rem",
        marginTop: "-77rem",
        marginLeft: "50rem",
      }}
      transition={{ duration: 0.8 }}
      className="text"
    >
      {children}
    </motion.p>
  );
};
