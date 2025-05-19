import { BlurIn } from "./BlurIn";
import { BlurOut } from "./BlurOut";
import { motion, useTransform } from "framer-motion";
import { BlurOut2 } from "./BlurOut2";
import { ScrollScene2 } from "../Scenes/ScrollScene2";
import { useBlurOut } from "Hooks/useBlurOut";
import { useGrass } from "Hooks/useGrass";

export const Parallax = () => {
  const { opacityThree } = useBlurOut();
  const { ref, grassY, textY, blurAmount } = useGrass();

  return (
    <div className="container">
      <div className="scene1 relative">
        <motion.div
          ref={ref}
          className="background"
          style={{ position: "sticky", top: "0", overflow: "hidden" }}
        >
          <motion.img
            src="/back1.png"
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
          <img src="/grass1.png" alt="Grass Layer 1" className="grass-image1" />
          <img src="/grass2.png" alt="Grass Layer 2" className="grass-image2" />
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
      </div>

      <motion.div
        className="scene2"
        initial={{ opacity: 0 }}
        style={{
          opacity: opacityThree,
        }}
      >
        <BlurOut2>
          De vrouw van de zoon probeert hem tevergeefs te helpen en ze droomt
          over een oude vrouw in een hutje in de bergen.
        </BlurOut2>
        <ScrollScene2 children={undefined} />
      </motion.div>
    </div>
  );
};
