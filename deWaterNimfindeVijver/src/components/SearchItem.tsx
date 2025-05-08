import SearchFilter from "components/SearchFilter";
import { useSearch } from "../Hooks/useSearch"; // of jouw juiste path

function SearchItem() {
  const { searchTerm, setSearchTerm, filteredItems } = useSearch();

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
