import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";
import SearchFilter from "components/SearchFilter";
import { useSearch } from "Hooks/useSearch";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";

const Navigation = () => {
  const { searchTerm, setSearchTerm } = useSearch();
  const [showSearch, setShowSearch] = useState(false);
  const icon = FiSearch({ size: 24, color: "black" });

  return (
    <nav className={styles.nav}>
      <div className={styles.links}>
        <Link to="/Home">
          <img src="/Logo er was eens_Versie2.png" alt="lalala" />
        </Link>
      </div>

      <div className={styles.rechts}>
        <Link to="/home">SPROOKJES</Link>
        <Link to="/making-of/1">MAKING OF</Link>
        <Link to="/about">ABOUT US</Link>

        <button
          onClick={() => setShowSearch(!showSearch)}
          className={styles.searchIcon}
        >
          {icon}
        </button>
      </div>

      {showSearch && (
        <div className={styles.searchOverlay}>
          <SearchFilter onSearch={setSearchTerm} />
        </div>
      )}
    </nav>
  );
};

export default Navigation;
