import { useState } from "react";
import DATA from "../data.json";

export function useSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = DATA.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return { searchTerm, setSearchTerm, filteredItems };
}
