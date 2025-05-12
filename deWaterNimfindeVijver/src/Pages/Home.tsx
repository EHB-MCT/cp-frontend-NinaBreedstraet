// import LandingsPagina from "./Landingspagina";
import styles from "../Pages/Styles.module.scss";
import { useState } from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import DATA from "../data.json";
import SprookjeStories from "components/PortaalComponents/SprookjeStories";
import { Slider } from "../components/PortaalComponents/Slider/Slider";
import { useSearch } from "Hooks/useSearch";
import SearchFilter from "components/PortaalComponents/SearchFilter";
import { FiSearch } from "react-icons/fi";

function Home() {
  const { searchTerm, setSearchTerm } = useSearch();
  const [showSearch, setShowSearch] = useState(false);
  const icon = FiSearch({ size: 24, color: "black" });

  const filteredSprookjes = DATA.filter((sprookjes) =>
    sprookjes.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <button
        onClick={() => setShowSearch(!showSearch)}
        className={styles.searchIcon}
      >
        {icon}
      </button>
      {showSearch && (
        <div className={styles.searchOverlay}>
          <SearchFilter onSearch={setSearchTerm} />
        </div>
      )}
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
