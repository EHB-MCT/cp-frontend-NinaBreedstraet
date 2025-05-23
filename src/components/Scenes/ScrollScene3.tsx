import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BlurOut3 } from "../EffectenComponentsSprookje/BlurOut3";
import { BlurOut4 } from "../EffectenComponentsSprookje/BlurOut4";

export const ScrollScene3 = () => {
  const sceneRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  const fishX = useTransform(scrollYProgress, [0.8, 1], ["-20%", "300%"]);

  const grassY = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const blurAmount = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.5],
    [1, 0, 0, 0]
  );

  const img1Opacity = useTransform(
    scrollYProgress,
    [0.01, 0.11, 0.21],
    [0, 1, 0]
  );
  const img1Y = useTransform(scrollYProgress, [0.01, 0.21], [50, 0]);
  const img2Opacity = useTransform(
    scrollYProgress,
    [0.21, 0.31, 0.41],
    [0, 1, 0]
  );
  const img2Y = useTransform(scrollYProgress, [0.21, 0.41], [50, 0]);
  const img3Opacity = useTransform(
    scrollYProgress,
    [0.41, 0.51, 0.61],
    [0, 1, 0]
  );
  const img3Y = useTransform(scrollYProgress, [0.41, 0.61], [50, 0]);
  const woman = useTransform(scrollYProgress, [0.01, 0.21], [50, 0]);
  const womanOpacity = useTransform(
    scrollYProgress,
    [0.01, 0.11, 0.21],
    [0, 0, 1]
  );

  return (
    <section
      ref={sceneRef}
      style={{
        position: "relative",
        top: 0,
        height: "300vh",
        zIndex: 0,
      }}
    >
      <motion.div
        className="scene2-container"
        style={{
          position: "sticky",
          top: 0,
          //height: "100%",
          height: "150vh",
          width: "auto",
          marginTop: "50vh",
        }}
      >
        <motion.img
          src="/cp-frontend-NinaBreedstraet/BG3M.png"
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
            zIndex: 1,
            overflow: "visible",
            opacity: 100,
          }}
          transition={{ duration: 0.2 }}
        />
        <motion.img
          src="/cp-frontend-NinaBreedstraet/lelies2.png"
          alt="Beeld 3"
          style={{
            position: "absolute",
            top: "30%",
            bottom: 0,
            left: "70%",
            width: "25%",
            height: "25%",
            objectFit: "cover",
            zIndex: 1,
            overflow: "visible",
          }}
        />

        <motion.img
          src="/cp-frontend-NinaBreedstraet/waterlelie2.png"
          alt="Beeld 3"
          style={{
            position: "absolute",
            top: "34%",
            bottom: 0,
            left: 0,
            width: "35%",
            height: "35%",
            objectFit: "cover",
            zIndex: 1,
            overflow: "visible",
          }}
        />

        <BlurOut3 scrollYProgress={scrollYProgress}>
          De vrouw krijgt een gouden kam van de oude vrouw en geeft deze af aan
          de nimf. Daarna krijgt ze een fluit en een spinnenwiel, ook deze geeft
          ze af een de nimf. De jager komt steeds meer bovendrijven.
        </BlurOut3>
      </motion.div>

      <motion.img
        src="/cp-frontend-NinaBreedstraet/kam.png"
        alt="Beeld 1"
        style={{
          position: "absolute",
          top: "20%",
          left: "45%",
          width: "10%",
          height: "10%",
          objectFit: "cover",
          y: img1Y,
          opacity: img1Opacity,
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "visible",
        }}
      />

      <motion.img
        src="/cp-frontend-NinaBreedstraet/fluit.png"
        alt="Beeld 2"
        style={{
          position: "absolute",
          top: "30%",
          left: "45%",
          width: "10%",
          height: "10%",
          objectFit: "cover",
          y: img2Y,
          opacity: img2Opacity,
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "visible",
        }}
      />

      <motion.img
        src="/cp-frontend-NinaBreedstraet/spinnenwiel.png"
        alt="Beeld 3"
        style={{
          position: "absolute",
          top: "40%",
          left: "45%",
          width: "12%",
          height: "12%",
          objectFit: "cover",
          y: img3Y,
          opacity: img3Opacity,
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "visible",
        }}
      />
      <motion.img
        src="/cp-frontend-NinaBreedstraet/woman6.png"
        alt="Beeld 3"
        style={{
          position: "absolute",
          top: "-2vh",
          left: "80%",
          width: "2%",
          height: "2%",
          objectFit: "cover",
          y: woman,
          opacity: womanOpacity,
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "visible",
        }}
      />

      <motion.div>
        <motion.img
          src="/cp-frontend-NinaBreedstraet/vissen.png"
          alt="Beeld 3"
          style={{
            position: "absolute",
            top: "80%",
            left: 0,
            width: "28%",
            height: "28%",
            objectFit: "cover",
            zIndex: 1,
            overflow: "visible",
            x: fishX,
          }}
        />
        <BlurOut4 scrollYProgress={scrollYProgress}>
          Nadat de jager helemaal komt bovendrijven, overstroomt de rivier.
        </BlurOut4>
      </motion.div>
    </section>
  );
};
