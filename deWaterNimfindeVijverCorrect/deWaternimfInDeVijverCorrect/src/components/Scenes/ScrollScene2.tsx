import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BlurOut3 } from "../../components/EffectenComponentsSprookje/BlurOut3";

export const ScrollScene2 = () => {
  const sceneRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5, 0.6],
    [0, 1, 1, 0]
  );

  const grassY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  // const foxY = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <section
      ref={sceneRef}
      style={{
        position: "relative",
        height: "150vh",
        marginTop: "-80vh",
        zIndex: 0,
        background: "rgba(255,0,0,0.5)",
      }}
    >
      <div
        className="scene2-container"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
        }}
      >
        <motion.div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            width: "100%",
            zIndex: 1,
          }}
        >
          <motion.img
            src="/forest3.png"
            style={{
              position: "absolute",
              top: "-14vh",
              left: 0,
              objectFit: "cover",
              y: grassY,
              zIndex: 0,
            }}
          />
        </motion.div>

        <motion.img
          src="/fox.png"
          style={{
            opacity,
            position: "absolute",
            top: "30vh",
            bottom: "20vh",
            left: "65%",
            width: "28%",
            zIndex: 2,
          }}
        />

        <motion.img
          src="/fox2.png"
          style={{
            opacity,
            position: "absolute",
            top: "46vh",
            left: "60%",
            width: "15%",
            zIndex: 3,
          }}
        />

        <BlurOut3 scrollYProgress={scrollYProgress}>
          De vrouw van de zoon probeert hem tevergeefs te helpen en ze droomt
          over een oude vrouw in een hutje in de bergen.
        </BlurOut3>
      </div>
    </section>
  );
};
