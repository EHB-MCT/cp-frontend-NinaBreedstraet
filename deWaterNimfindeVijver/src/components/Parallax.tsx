import { BlurIn } from "./BlurIn";
import { BlurOut } from "./BlurOut";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BlurOut2 } from "./BlurOut2";


export const Parallax = () => {
  const grassRef = useRef(null);
  const textRef = useRef(null);

  const { scrollYProgress: grassScrollY } = useScroll({
    target: grassRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: textScrollY } = useScroll({
    target: textRef,
    offset: ["start end", "end start"]
  });

  const grassY = useTransform(grassScrollY, [0, 1], [0, -50]);
  const textY = useTransform(textScrollY, [0, 1], [0, -150]);

  return (
    <div className="container">
    <div className="scene1 relative">
      <div className="background">
        <img
          src="/back1.png"
          alt="Achtergrond"
          className="BG1"
        />
      </div>

      <motion.div className="grass" ref={grassRef} style={{ y: grassY }}>
        <img src="/grass1.png" alt="Grass Layer 1" className="grass-image1" />
        <img src="/grass2.png" alt="Grass Layer 2" className="grass-image2" />
      </motion.div>

      <motion.div className="text-container" ref={textRef} style={{ y: textY }}>
        <BlurOut>
          De vader van een jager beloofde zijn zoon aan de nimf te geven in ruil
          voor voorspoed, maar verzweeg dit voor zijn vrouw. Wanneer de zoon
          geboren werd, negeerden ze de belofte.
        </BlurOut>
      </motion.div>

      <motion.div className="text-container2" ref={textRef} style={{ y: textY }}>
        <BlurOut2>
          Wanneer de zoon volwassen is, trekt de nimf hem de vijver in en houdt hem gevangen.
        </BlurOut2>
      </motion.div>

      <div className="blur-in">
        <BlurIn>De Waternimf in de Vijver</BlurIn>
      </div>
    </div>

    <div className="scene2">
      <img src="/forest3.png" className="BG2" alt="Tweede scène" />
    </div>
  </div>
  
  );
};
