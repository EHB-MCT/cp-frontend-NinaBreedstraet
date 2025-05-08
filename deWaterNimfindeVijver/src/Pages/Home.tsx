// import LandingsPagina from "./Landingspagina";
import styles from "../Pages/Styles.module.scss";
import { useEffect, useRef, useState } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { SlArrowLeftCircle, SlArrowRightCircle } from "react-icons/sl";
import DATA from "../data.json";
import SprookjeStories from "components/SprookjeStories";
import { Slider } from "../components/Slider";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSprookjes = DATA.filter((sprookjes) =>
    sprookjes.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // const[sprookjes, setSprookjes] = useState(data);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://rebrickable.com/api/v3/lego/sets/?key=571cc24f110a9a44d04899dba0b5f854&page_size=10"
  //       );
  //       const data = await response.json();
  //       setSprookjes(
  //         data.results.map(set => ({
  //           ...set,
  //           complete: false,
  //         })))
  //     } catch (error) {
  //       console.error("Fout bij ophalen van data:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div>
      <div className={styles.titel1}>
        <h2 className={styles.titel1}>Hot Today</h2>

        <Slider />

        {/* <Sprookje imgUrl='' title='' /> */}
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
