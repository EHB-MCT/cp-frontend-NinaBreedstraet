import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "../Pages/Styles.module.scss";
import Splide from "@splidejs/splide";
import { SlArrowLeftCircle, SlArrowRightCircle } from "react-icons/sl";

export const Slider = () => {
  const splideRef = useRef<Splide | null>(null);

  useEffect(() => {
    const splide = new Splide("#image-slider", {
      type: "loop",
      perPage: 1,
      autoplay: true,
      pagination: false,
      arrows: false,
    }).mount();

    splideRef.current = splide;
  }, []);

  const handlePrev = () => {
    splideRef.current?.go("<");
  };

  const handleNext = () => {
    splideRef.current?.go(">");
  };
  return (
    <div id="image-slider" className="splide">
      <div className={styles.splideWrapper}>
        <div className={styles.pijltjesContainer}>
          <button onClick={handlePrev} className={styles.splide__arrow}>
            {SlArrowLeftCircle({})}
          </button>
          <button onClick={handleNext} className={styles.splide__arrow}>
            {SlArrowRightCircle({})}
          </button>
        </div>

        <div className="splide__track">
          <ul className="splide__list">
            <li className={styles.splide__slide}>
              <div className={styles.sprookjeDeelContainer}>
                <a href="./sprookje" className={styles.sprookjeDeel}>
                  Pagina
                </a>
                <a href="./sprookje" className={styles.sprookjeDeel}>
                  Pagina
                </a>
              </div>
            </li>
            <li className="splide__slide">
              <div className={styles.sprookjeDeelContainer}>
                <a href="./sprookje" className={styles.sprookjeDeel}>
                  Pagina
                </a>
                <a href="./sprookje" className={styles.sprookjeDeel}>
                  Pagina
                </a>
              </div>
            </li>
            <li className="splide__slide">
              <div className={styles.sprookjeDeelContainer}>
                <a href="./sprookje" className={styles.sprookjeDeel}>
                  Pagina
                </a>
                <a href="./sprookje" className={styles.sprookjeDeel}>
                  Pagina
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
