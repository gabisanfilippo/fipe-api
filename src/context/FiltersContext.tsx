import { createContext, FC, useState } from "react";

export const FiltersContext = createContext<IContext | null>(null);

export const FiltersContextProvider: FC<IProvider> = ({ children }) => {
  const [filters, setFilters] = useState<IFilters>({
    brands: " ",
    models: " ",
    years: " ",
  });
  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};
