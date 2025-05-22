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
    [0, 0.01, 0.1, 0.3],
    [0, 1, 1, 0]
  );

  const blurAmount = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.5],
    [0, 0, 0, 1]
  );

  const grassY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      ref={sceneRef}
      style={{
        position: "relative",
        height: "160vh",
        marginTop: "-80vh",
        zIndex: 0,
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
            src="/cp-frontend-NinaBreedstraet/forest4.png"
            style={{
              position: "absolute",
              top: "-14vh",
              left: 0,
              objectFit: "cover",
              filter: useTransform(blurAmount, (value) => `blur(${value}px)`),
              y: grassY,
              zIndex: 0,
            }}
          />
        </motion.div>

        <motion.img
          src="/cp-frontend-NinaBreedstraet/fox.png"
          style={{
            opacity,
            position: "absolute",
            top: "10vh",
            bottom: "20vh",
            left: "65%",
            width: "28%",
            zIndex: 2,
          }}
        />

        <motion.img
          src="/cp-frontend-NinaBreedstraet/fox2.png"
          style={{
            opacity,
            position: "absolute",
            top: "33vh",
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
