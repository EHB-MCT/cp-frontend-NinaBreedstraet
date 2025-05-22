import { useEffect, useRef } from "react";
import styles from "./Slider.module.scss";
import Splide from "@splidejs/splide";
import { SlArrowLeftCircle, SlArrowRightCircle } from "react-icons/sl";

type Sprookje = {
  id: string;
  img: string;
  name: string;
  title: string;
  Genre: string;
};

type SliderProps = {
  sprookjesData: Sprookje[];
};

function getRandomPairs(arr: Sprookje[], slidesCount = 3) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  const pairs = [];
  for (let i = 0; i < slidesCount * 2 && i < shuffled.length; i += 2) {
    pairs.push([shuffled[i], shuffled[i + 1]].filter(Boolean));
  }
  return pairs;
}

export const Slider = ({ sprookjesData }: SliderProps) => {
  const splideRef = useRef<Splide | null>(null);
  const pairs = getRandomPairs(sprookjesData, 3);

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
                        <img src={sprookje.img} alt={sprookje.title} />
                      </div>
                      <div className={styles.container}>
                        <div className={styles.info}>
                          <h1 className={styles.nameSprookje}>
                            {sprookje.name}
                          </h1>
                          <p className={styles.titleSprookje}>
                            {sprookje.title}
                          </p>
                          <p className={styles.genreSprookje}>
                            {sprookje.Genre}
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

        {/* <div className="splide__track">
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
                  <div className={styles.imgSprookje}>
                    <img src="/Waternimf.png" alt="Sprookje" />
                  </div>
                  <div className={styles.container}>
                    <div className={styles.info}>
                      <h1 className={styles.nameSprookje}>lalala</h1>
                      <p className={styles.titleSprookje}>papapapa</p>
                      <p className={styles.genreSprookje}>dadadada</p>
                    </div>
                    <div className={styles.link}>
                      <a href="./sprookje">&rarr;</a>
                    </div>
                  </div>
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
        </div> */}
      </div>
    </div>
  );
};
