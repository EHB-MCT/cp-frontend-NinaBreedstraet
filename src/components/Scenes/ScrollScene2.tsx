import { BlurOut3 } from "../../components/EffectenComponentsSprookje/BlurOut3";
import { useBlurOutScene2 } from "../../hooks/useScene2";
import { motion } from "framer-motion";

export const ScrollScene2 = () => {
  const { blurFilter, grassY, opacity, scrollYProgress, sceneRef } =
    useBlurOutScene2();
  // const sceneRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sceneRef}
      style={{
        position: "relative",
        height: "200vh",
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
              top: "-18vh",
              left: 0,
              objectFit: "cover",
              filter: blurFilter,
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
          Zijn vrouw probeert hem tevergeefs te helpen. Ze droomt over een oude
          vrouw in een hutje hoog in de bergen, die haar raad en hulpmiddelen
          belooft.
        </BlurOut3>
      </div>
    </section>
  );
};
