import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BlurOut5 } from "../EffectenComponentsSprookje/BlurOut5";
import { BlurOut6 } from "../EffectenComponentsSprookje/BlurOut6";
import { BlurOut7 } from "../EffectenComponentsSprookje/BlurOut7";

export const ScrollScene4 = () => {
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

  const opacityPeople = useTransform(
    scrollYProgress,
    [0, 0.5, 0.5, 0.6],
    [0, 1, 1, 0]
  );
  return (
    <section
      ref={sceneRef}
      style={{
        position: "relative",
        top: "-35%",
        height: "290vh",
        zIndex: 0,
        paddingTop: "75vh",
      }}
    >
      <motion.div
        style={{
          position: "sticky",
          display: "flex",
          top: 0,
          justifyContent: "space-between",
          height: "20vh",
          width: "100%",
          overflow: "visible",
          zIndex: 1,
        }}
      >
        <BlurOut5 scrollYProgress={scrollYProgress}>
          Tijdens de overstroming veranderen de zoon en zijn vrouw in een kikker
          en een pad.
        </BlurOut5>
        <motion.img
          src="/cp-frontend-NinaBreedstraet/blad2.png"
          alt="Beeld 3"
          style={{
            position: "absolute",
            width: "60%",
            height: "60%",
            rotate: "20deg",
            top: "-8vh",
            overflow: "visible",
            objectFit: "cover",
          }}
        />
        <motion.img
          src="/cp-frontend-NinaBreedstraet/blad.png"
          alt="Beeld 3"
          style={{
            position: "absolute",
            width: "60%",
            height: "60%",
            left: "50%",
            top: "-4vh",
            rotate: "-20deg",
            objectFit: "cover",
            overflow: "visible",
          }}
        />
      </motion.div>

      <motion.img
        src="/cp-frontend-NinaBreedstraet/landschap.jpg"
        alt="Beeld 3"
        style={{
          position: "sticky",
          top: "20%",
          width: "100%",
          height: "20%",
          objectFit: "cover",
          zIndex: 0,
          overflow: "visible",
        }}
      />
      <motion.img
        src="/cp-frontend-NinaBreedstraet/frog3.png"
        alt="Beeld 3"
        style={{
          position: "absolute",
          top: "16%",
          left: "35%",
          width: "7%",
          height: "7%",
          rotate: "5deg",
          objectFit: "cover",
          zIndex: 1,
          overflow: "visible",
          opacity: opacity,
        }}
      />

      <motion.img
        src="/cp-frontend-NinaBreedstraet/toad.png"
        alt="Beeld 3"
        style={{
          position: "absolute",
          top: "16%",
          left: "60%",
          width: "8%",
          height: "8%",
          rotate: "5deg",
          objectFit: "cover",
          zIndex: 1,
          overflow: "visible",
          opacity: opacity,
        }}
      />

      <motion.img
        src="/cp-frontend-NinaBreedstraet/woman6.png"
        alt="Beeld 3"
        style={{
          position: "sticky",
          top: "70%",
          left: "15%",
          width: "3%",
          height: "3%",
          objectFit: "cover",
          zIndex: 1,
          overflow: "visible",
          opacity: opacityPeople,
        }}
      />

      <motion.img
        src="/cp-frontend-NinaBreedstraet/man6.png"
        alt="Beeld 3"
        style={{
          position: "sticky",
          top: "43%",
          left: "58%",
          width: "2%",
          height: "2%",
          objectFit: "cover",
          zIndex: 1,
          overflow: "visible",
          opacity: opacityPeople,
        }}
      />

      <motion.div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          height: "100vh",
        }}
      >
        <motion.img
          src="/cp-frontend-NinaBreedstraet/schapen2.png"
          alt="Beeld 3"
          style={{
            position: "absolute",
            top: "47%",
            left: "53%",
            width: "7%",
            height: "7%",
            objectFit: "cover",
            zIndex: 1,
            overflow: "visible",
          }}
        />
        <motion.img
          src="/cp-frontend-NinaBreedstraet/schapen.png"
          alt="Beeld 3"
          style={{
            position: "absolute",
            top: "37%",
            left: "15%",
            width: "75%",
            height: "75%",
            objectFit: "cover",
            zIndex: 1,
            overflow: "visible",
          }}
        />
      </motion.div>
      <motion.div
        style={{
          height: "100vh",
          zIndex: 1,
          overflow: "visible",
          backgroundColor: "red",
        }}
      >
        <BlurOut6 scrollYProgress={scrollYProgress}>
          Eens de overstroming voorbij is en ze terug veranderen in mensen, zijn
          ze ver verwijderd van elkaar, herinneren zich niks meer en worden
          schapenherders.
        </BlurOut6>
        <motion.img
          src="/cp-frontend-NinaBreedstraet/kiss.png"
          alt="Beeld 3"
          style={{
            position: "sticky",
            left: "28%",
            width: "40%",
            zIndex: 1,
            overflow: "visible",
          }}
        />

        <BlurOut7 scrollYProgress={scrollYProgress}>
          Enkele jaren later, komen ze elkaar terug tegen en worden ze terug
          verliefd op elkaar.
        </BlurOut7>
      </motion.div>
    </section>
  );
};
