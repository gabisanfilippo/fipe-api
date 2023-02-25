import { createContext, FC, useState } from "react";

export const FiltersContext = createContext<IContext | null>(null);

export const FiltersContextProvider: FC<IProvider> = ({ children }) => {
  const [filters, setFilters] = useState<IFilters>({
    brands: " ",
    models: " ",
    years: " ",
  });
  const [options, setOptions] = useState({
    brands: [{ label: "Marcas", value: " " }],
    models: [{ label: "Modelos", value: " " }],
    years: [{ label: "Anos", value: " " }],
  });
  return (
    <FiltersContext.Provider
      value={{ filters, setFilters, options, setOptions }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
