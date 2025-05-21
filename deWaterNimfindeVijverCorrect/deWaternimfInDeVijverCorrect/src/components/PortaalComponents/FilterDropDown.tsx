import { createContext, useContext, useState } from "react";
import type { ReactNode, Dispatch, SetStateAction } from "react";

interface FilterContextType {
  genreFilter: string;
  setGenreFilter: Dispatch<SetStateAction<string>>;
}

const FilterContext = createContext<FilterContextType>({
  genreFilter: "",
  setGenreFilter: () => {},
});

type ProviderProps = {
  children: ReactNode;
};

export function FilterProvider({ children }: ProviderProps) {
  const [genreFilter, setGenreFilter] = useState("");
  return (
    <FilterContext.Provider value={{ genreFilter, setGenreFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  return useContext(FilterContext);
}
