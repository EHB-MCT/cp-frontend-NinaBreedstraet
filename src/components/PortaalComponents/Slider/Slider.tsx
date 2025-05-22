import { useEffect, useRef } from "react";
import styles from "./Slider.module.scss";
import Splide from "@splidejs/splide";
import { SlArrowLeftCircle, SlArrowRightCircle } from "react-icons/sl";

export type Sprookje = {
  id: string;
  imgThumbnail: string;
  nameStudent: string;
  fairytale: string;
  genre: string;
};

type SliderProps = {
  sprookjesData: Sprookje[];
};

function getRandomPairs(arr: Sprookje[], slidesCount = 3) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  const pairs: Sprookje[][] = [];
  for (let i = 0; i < slidesCount * 2 && i < shuffled.length; i += 2) {
    pairs.push([shuffled[i], shuffled[i + 1]].filter(Boolean) as Sprookje[]);
  }
  return pairs;
}

export const Slider = ({ sprookjesData }: SliderProps) => {
  const splideRef = useRef<Splide | null>(null);
  const pairs = getRandomPairs(sprookjesData, 3);

  useEffect(() => {
    if (splideRef.current) {
      splideRef.current.destroy();
    }

    const splide = new Splide("#image-slider", {
      type: "loop",
      perPage: 1,
      focus: "center",
      autoplay: true,
      pagination: false,
      arrows: false,
    }).mount();

    splideRef.current = splide;

    return () => {
      if (splideRef.current) {
        splideRef.current.destroy();
      }
    };
  }, [pairs]);

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
            {pairs.map((pair, index) => (
              <li key={index} className="splide__slide">
                <div className={styles.sprookjeDeelContainer}>
                  {pair.map((sprookje) => (
                    <a
                      key={sprookje.id}
                      href={`/cp-frontend-NinaBreedstraet/making-of/${sprookje.id}`}
                      className={styles.sprookjeDeel}
                    >
                      <div className={styles.imgSprookje}>
                        <img
                          src={sprookje.imgThumbnail}
                          alt={sprookje.fairytale}
                        />
                      </div>
                      <div className={styles.container}>
                        <div className={styles.info}>
                          <h1 className={styles.nameSprookje}>
                            {sprookje.nameStudent}
                          </h1>
                          <p className={styles.titleSprookje}>
                            {sprookje.fairytale}
                          </p>
                          <p className={styles.genreSprookje}>
                            {sprookje.genre}
                          </p>
                        </div>
                        <div className={styles.link}>
                          <span>&rarr;</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
