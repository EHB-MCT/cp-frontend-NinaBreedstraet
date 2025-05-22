import SearchFilter from "./SearchFilter";
import { useSearch } from "../../hooks/useSearch";

function SearchItem() {
  const { setSearchTerm, filteredItems } = useSearch();

  return (
    <div>
      <SearchFilter onSearch={setSearchTerm} />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchItem;
