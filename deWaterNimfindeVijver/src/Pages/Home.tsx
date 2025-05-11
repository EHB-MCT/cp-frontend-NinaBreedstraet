// import LandingsPagina from "./Landingspagina";
import styles from "../Pages/Styles.module.scss";
import { useEffect, useRef, useState } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { SlArrowLeftCircle, SlArrowRightCircle } from "react-icons/sl";
import DATA from "../data.json";
import SprookjeStories from "components/SprookjeStories";
import { Slider } from "../components/Slider/Slider";
import { useSearch } from "Hooks/useSearch";

function Home() {
  const { searchTerm } = useSearch();

  const filteredSprookjes = DATA.filter((sprookjes) =>
    sprookjes.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className={styles.titel1}>
        <h2 className={styles.titel1}>Hot Today</h2>

        <Slider sprookjesData={filteredSprookjes} />
      </div>

      <div>
        <h2 className={styles.titel2}>Stories</h2>
        <ul className={styles.storiesContainer}>
          {filteredSprookjes.map((item) => (
            <SprookjeStories
              key={item.id}
              img={item.img}
              name={item.name}
              title={item.title}
              genre={item.Genre}
              link={`/making-of/${item.id}`}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
