import { API } from "@services/api";
import { createContext, FC, useEffect, useState } from "react";
import { dehydrate, QueryClient } from "react-query";

export const FiltersContext = createContext<IContext | null>(null);

let filtersGlobal: IFilters;

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

  useEffect(() => {
    filtersGlobal = filters;
  }, [filters]);

  return (
    <FiltersContext.Provider
      value={{ filters, setFilters, options, setOptions }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export async function getServerSideProps() {
  const filters = filtersGlobal;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["getModels", filters.brands], async () => {
    const { data } = await API.get(
      `/fipe/api/v1/carros/marcas/${filters.brands}/modelos`
    );
    return data;
  });
  await queryClient.prefetchQuery(["getYears", filters], async () => {
    const { data } = await API.get(
      `/fipe/api/v1/carros/marcas/${filters.brands}/modelos/${filters.models}/anos`
    );
    return data;
  });
  await queryClient.prefetchQuery(["getPrices", filters], async () => {
    const { data } = await API.get(
      `/fipe/api/v1/carros/marcas/${filters.brands}/modelos/${filters.models}/anos/${filters.years}`
    );
    return data;
  });
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}