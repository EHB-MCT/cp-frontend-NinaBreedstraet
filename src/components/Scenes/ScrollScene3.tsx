import { motion } from "framer-motion";
import { BlurOut4 } from "../EffectenComponentsSprookje/BlurOut4";
import { BlurOut8 } from "../EffectenComponentsSprookje/BlurOut8";
import { useBlurOutScene3 } from "../../hooks/useScene3";

export const ScrollScene3 = () => {
  const {
    blurFilter,
    sceneRef,
    grassY,
    fishX,
    scrollYProgress,
    img1Y,
    img2Y,
    img3Y,
    img1Opacity,
    img2Opacity,
    img3Opacity,
    woman,
    womanOpacity,
    yLelies,
  } = useBlurOutScene3();

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
          marginTop: "40vh",
        }}
      >
        <motion.img
          src="/cp-frontend-NinaBreedstraet/BG3.webp"
          alt="Achtergrond"
          className="BG1"
          style={{
            y: grassY,
            filter: blurFilter,
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
          src="/cp-frontend-NinaBreedstraet/stars.gif"
          alt="Beeld 3"
          style={{
            position: "absolute",
            top: "25%",
            bottom: 0,
            left: "8%",
            width: "13%",
            height: "13%",
            objectFit: "cover",
            zIndex: 1,
            overflow: "visible",
          }}
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
            y: yLelies,
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
            y: yLelies,
          }}
        />

        <BlurOut8 scrollYProgress={scrollYProgress}>
          De oude vrouw geeft een gouden kam, een zilveren fluit en uiteindelijk
          een houten spinnenwiel aan de jonge vrouw die deze aan de nimf geeft.
          Bij elke gave drijft hij dichter naar de oever.
        </BlurOut8>
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
        Zodra de verdronken zoon boven het wateroppervlak verschijnt, zwelt de
        rivier aan en overstroomt het omliggende land.
      </BlurOut4>
    </section>
  );
};
