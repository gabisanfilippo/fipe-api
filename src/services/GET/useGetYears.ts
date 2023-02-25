import { API } from "@services/api";
import { useQuery } from "react-query";

async function getYears(filters: IFilters) {
  try {
    const { data } = await API.get(
      `/fipe/api/v1/carros/marcas/${filters.brands}/modelos/${filters.models}/anos`
    );
    return data;
  } catch (error) {
    console.log("Error at get years request: ", error);
    throw new Error();
  }
}

export function useGetYears(filters: IFilters) {
  const { data, isLoading, isError } = useQuery(
    ["getYears", filters],
    async () => {
      return await getYears(filters);
    }
  );
  return {
    dataYears: data as IResponse[],
    isLoadingYears: isLoading as boolean,
    isErrorYears: isError as boolean,
  };
}
