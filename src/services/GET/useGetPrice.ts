import { API } from "@services/api";
import { useQuery } from "react-query";

async function getPrices(filters: IFilters) {
  try {
    const { data } = await API.get(
      `/fipe/api/v1/carros/marcas/${filters.brands}/modelos/${filters.models}/anos/${filters.years}`
    );
    return data;
  } catch (error) {
    console.log("Error at get models request: ", error);
    throw new Error();
  }
}

export function useGetPrices(filters: IFilters) {
  const { data, isLoading, isError } = useQuery(
    ["getPrices", filters],
    async () => {
      return await getPrices(filters);
    }
  );
  return {
    dataPrices: data as IResponsePrice,
    isLoadingPrices: isLoading as boolean,
    isErrorPrices: isError as boolean,
  };
}
