import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const ScrollScene3 = () => {
  const sceneRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  const grassY = useTransform(scrollYProgress, [0.8, 1], [0, -300]);

  const blurAmount = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.5],
    [2, 0, 0, 2]
  );

  return (
    <section
      ref={sceneRef}
      style={{
        position: "relative",
        top: 0,
        height: "200vh",
        zIndex: 0,
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
          src="/bomen.png"
          alt="Achtergrond"
          className="BG1"
          style={{
            y: grassY,
            filter: useTransform(blurAmount, (value) => `blur(${value}px)`),
            position: "sticky",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
          transition={{ duration: 0.2 }}
        />
      </div>
    </section>
  );
};
