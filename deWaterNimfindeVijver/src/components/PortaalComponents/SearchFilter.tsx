import styles from "../../Pages/Styles.module.scss";

type SearchProps = {
  onSearch: (query: string) => void;
};

function SearchFilter({ onSearch }: SearchProps) {
  return (
    <input
      type="text"
      className={styles.inputSearchBar}
      placeholder="Search fairytale..."
      onChange={(event) => onSearch(event.target.value)}
    />
  );
}

export default SearchFilter;
