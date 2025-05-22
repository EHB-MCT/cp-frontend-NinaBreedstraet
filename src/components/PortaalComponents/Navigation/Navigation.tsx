import { Link } from "react-router";
import styles from "./Navigation.module.scss";
import { useFilter } from "../FilterDropDown";
import DATA from "../../../data.json";

const Navigation = () => {
  const { genreFilter, setGenreFilter } = useFilter();

  const genres = Array.from(new Set(DATA.map((item) => item.Genre)));

  return (
    <nav className={styles.nav}>
      <div className={styles.links}>
        <Link to="/cp-frontend-NinaBreedstraet/Home">
          <img
            src="/cp-frontend-NinaBreedstraet/Logo er was eens_Versie2.png"
            alt="lalala"
          />
        </Link>
      </div>

      <div className={styles.rechts}>
        <Link to="/cp-frontend-NinaBreedstraet/home">
          <select
            className={styles.genreDropdown}
            value={genreFilter}
            onChange={(e) => setGenreFilter(e.target.value)}
          >
            <option value="">SPROOKJES</option>
            {genres.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </Link>
        <Link to="/cp-frontend-NinaBreedstraet/making-of/1">MAKING OF</Link>
        <Link to="/cp-frontend-NinaBreedstraet/about">ABOUT US</Link>
      </div>
    </nav>
  );
};

export default Navigation;
