import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";
import SearchFilter from "components/SearchFilter";
import { useSearch } from "Hooks/useSearch";

const Navigation = () => {
  const { searchTerm, setSearchTerm, filteredItems } = useSearch();

  return (
    <nav className={styles.nav}>
      <div className={styles.links}>
        <Link to="/Home">
          <img src="/Logo er was eens_Versie2.png" alt="lalala" />
        </Link>
      </div>
      <div className={styles.rechts}>
        <Link to="/Home">Sprookjes</Link>
        <Link to="/MakingOf">Making of</Link>
        <Link to="/About">About us</Link>
        <SearchFilter onSearch={setSearchTerm} />
      </div>
    </nav>
  );
};

export default Navigation;
