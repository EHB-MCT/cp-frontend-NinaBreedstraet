import { BlurIn } from "../EffectenComponentsSprookje/BlurIn";
import { BlurOut } from "../EffectenComponentsSprookje/BlurOut";
import { motion, useTransform } from "framer-motion";
import { BlurOut2 } from "../EffectenComponentsSprookje/BlurOut2";
import { ScrollScene2 } from "./ScrollScene2";
import { useGrass } from "../../hooks/useGrass";
import { ScrollScene3 } from "./ScrollScene3";
import { ScrollScene4 } from "./ScrollScene4";
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
            src="/cp-frontend-NinaBreedstraet/back1.jpeg"
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
            Een man belooft zijn pasgeboren zoon aan de waternimf in de vijver
            in ruil voor voorspoed, maar verzwijgt deze verdrinkingsbelofte voor
            zijn vrouw. Bij de geboorte brengt hij zijn zoon niet naar de
            waternimf.
          </BlurOut>
        </motion.div>

        <motion.div className="text-container2" ref={ref} style={{ y: textY }}>
          <BlurOut2>
            Als de zoon volwassen is, neemt de nimf wraak en lokt hem met haar
            betoverende gezang steeds dieper de vijver in, totdat hij op de
            bodem blijft liggen alsof hij slaapt.
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

      <ScrollScene4 />
    </div>
  );
};
