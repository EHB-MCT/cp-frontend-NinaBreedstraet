// import LandingsPagina from "./Landingspagina";
import styles from "../Pages/Styles.module.scss";
import { useState } from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import SprookjeStories from "../components/PortaalComponents/SprookjeStories";
import { Slider } from "../components/PortaalComponents/Slider/Slider";
import { useSearch } from "../hooks/useSearch";
import SearchFilter from "../components/PortaalComponents/SearchFilter";
import { FiSearch } from "react-icons/fi";
import { useFilter } from "../components/PortaalComponents/FilterDropDown";
import { useFairytaleCards } from "../hooks/useFairyTales";

function Home() {
  const { searchTerm, setSearchTerm } = useSearch();
  const [showSearch, setShowSearch] = useState(false);
  const { genreFilter } = useFilter();
  const icon = FiSearch({ size: 24, color: "black" });
  const { data } = useFairytaleCards();

  const sprookjesslider = data.filter((sprookjes) =>
    sprookjes.fairytale.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // const sprookjesslider: Sprookje[] = data.map((item) => ({
  //   id: item.id,
  //   imgThumbnail: item.imgThumbnail,
  //   nameStudent: item.nameStudent,
  //   fairytale: item.fairytale,
  //   genre: item.genre,
  // }));

  const filteredSprookjes = data.filter((item) => {
    const matchesSearch = item.fairytale
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesGenre =
      !genreFilter || item.genre.toLowerCase() === genreFilter.toLowerCase();
    return matchesSearch && matchesGenre;
  });

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

        <Slider sprookjesData={sprookjesslider} />
      </div>

      <div>
        <h2 className={styles.titel2}>Stories</h2>
        <ul className={styles.storiesContainer}>
          {filteredSprookjes.map((item) => (
            <SprookjeStories
              key={item.id}
              img={item.imgThumbnail}
              name={item.nameStudent}
              title={item.fairytale}
              genre={item.genre}
              link={`/cp-frontend-NinaBreedstraet/making-of/${item.id}`}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
