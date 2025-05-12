import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useGrass } from "Hooks/useGrass";

export const ScrollScene2 = ({ children }: { children: React.ReactNode }) => {
  const grassRef = useRef(null);

  const { ref, grassTwoY } = useGrass();

  const { scrollYProgress: grassScrollY } = useScroll({
    target: grassRef,
    offset: ["start end", "end start"],
  });

  const grassY = useTransform(grassScrollY, [0, 0.9], [0, -100]);

  const foxY = useTransform(grassScrollY, [0.6, 1], [100, 0]);

  return (
    <section
      ref={grassRef}
      style={{
        top: "-40vh",
        height: "70vh",
        position: "relative",
      }}
    >
      <div
        className="scene2-container"
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100%",
        }}
      >
        <motion.img
          src="/forest3.png"
          ref={grassRef}
          style={{
            y: grassY,
            width: "100%",
            position: "relative",
          }}
        />

        <motion.img
          src="/fox.png"
          ref={grassRef}
          style={{
            position: "absolute",
            bottom: "50vh",
            left: "65%",
            width: "28%",
          }}
        />

        <motion.img
          src="/fox2.png"
          ref={grassRef}
          style={{
            position: "absolute",
            bottom: "50vh",
            left: "65%",
            width: "15%",
            y: foxY,
          }}
        />
      </div>
    </section>
  );
};
