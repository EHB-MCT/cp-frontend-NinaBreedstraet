import { BlurIn } from "./BlurIn";
import { BlurOut } from "./BlurOut";
import { motion, useTransform } from "framer-motion";
import { BlurOut2 } from "./BlurOut2";
import { ScrollScene2 } from "../Scenes/ScrollScene2";
import { useGrass } from "../../hooks/useGrass";
import { ScrollScene3 } from "../../components/Scenes/ScrollScene3";
import "../../index.scss";

export const Parallax = () => {
  const { ref, grassY, textY, blurAmount } = useGrass();

  return (
    <div className="container">
      <section
        className="scene1 relative"
        style={{
          position: "relative",
          height: "220vh",
        }}
      >
        <motion.div
          ref={ref}
          className="background"
          style={{
            position: "sticky",
            top: "0",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <motion.img
            src="/cp-frontend-NinaBreedstraet/back1.png"
            alt="Achtergrond"
            className="BG1"
            style={{
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
        </motion.div>

        <motion.div className="grass" ref={ref} style={{ y: grassY }}>
          <img
            src="/cp-frontend-NinaBreedstraet/Grass1.png"
            alt="Grass Layer 1"
            className="grass-image1"
          />
          <img
            src="/cp-frontend-NinaBreedstraet/Grass2.png"
            alt="Grass Layer 2"
            className="grass-image2"
          />
        </motion.div>

        <motion.div className="text-container" ref={ref} style={{ y: textY }}>
          <BlurOut>
            De vader van een jager beloofde zijn zoon aan de nimf te geven in
            ruil voor voorspoed, maar verzweeg dit voor zijn vrouw...
          </BlurOut>
        </motion.div>

        <motion.div className="text-container2" ref={ref} style={{ y: textY }}>
          <BlurOut2>
            Wanneer de zoon volwassen is, trekt de nimf hem de vijver in...
          </BlurOut2>
        </motion.div>

        <div className="blur-in">
          <BlurIn>De Waternimf in de Vijver</BlurIn>
        </div>
      </section>

      <div className="scene2">
        <ScrollScene2 />
      </div>

      <div className="scene3">
        <ScrollScene3 />
      </div>
    </div>
  );
};
