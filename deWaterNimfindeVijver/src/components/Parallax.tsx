import { BlurIn } from "./BlurIn";
import { BlurOut } from "./BlurOut";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BlurOut2 } from "./BlurOut2";
import { ScrollScene2 } from "./ScrollScene2";


export const Parallax = () => {
  const grassRef = useRef(null);
  const textRef = useRef(null);
  const backgroundRef = useRef(null);

  const { scrollYProgress } = useScroll();

  const { scrollYProgress: grassScrollY } = useScroll({
    target: grassRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: textScrollY } = useScroll({
    target: textRef,
    offset: ["start end", "end start"]
  });

  const grassY = useTransform(grassScrollY, [0.2, 0.5], [0, -50]);
  const textY = useTransform(textScrollY, [0.5, 1], [0, -150]);
  const blurAmount = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.5], [2, 0, 0, 2]);

  return (
    <div className="container">
      <div className="scene1 relative" >
       <motion.div
          ref={backgroundRef}
          className="background"
          style={{ position:"sticky", top:"0", overflow: "hidden" }}
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
        
        <motion.div className="grass" ref={grassRef} style={{ y: grassY }}>
          <img src="/grass1.png" alt="Grass Layer 1" className="grass-image1" />
          <img src="/grass2.png" alt="Grass Layer 2" className="grass-image2" />
        </motion.div>

        <motion.div className="text-container" ref={textRef} style={{ y: textY }}>
          <BlurOut>
            De vader van een jager beloofde zijn zoon aan de nimf te geven in ruil
            voor voorspoed, maar verzweeg dit voor zijn vrouw...
          </BlurOut>
        </motion.div>

        <motion.div className="text-container2" ref={textRef} style={{ y: textY }}>
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
          opacity: useTransform(
            scrollYProgress, 
            [0.1, 0.9],
            [1, 1]
          ),
        }}
      >
        <ScrollScene2 children={undefined}/>
      </motion.div>
    </div>
  
  );
};
