type SearchProps = {
  onSearch: (query: string) => void;
};

function SearchFilter({ onSearch }: SearchProps) {
  return (
    <input
      type="text"
      placeholder="Search fairytale..."
      onChange={(event) => onSearch(event.target.value)}
    />
  );
}

export default SearchFilter;
