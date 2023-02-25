import { API } from "@services/api";
import { useQuery } from "react-query";

async function getModelsAndYears(idBrand: number | string) {
  try {
    const { data } = await API.get(`/fipe/api/v1/carros/marcas/${idBrand}/modelos`);
    return data;
  } catch (error) {
    console.log("Error at get models request: ", error);
    throw new Error();
  }
}

export function useGetModelsAndYears(idBrand: number | string) {
  const { data, isLoading, isError } = useQuery(
    ["getModels", idBrand],
    async () => {
      return await getModelsAndYears(idBrand);
    }
  );
  return {
    dataModels: data as { anos: IResponse[]; modelos: IResponse[] },
    isLoadingModels: isLoading as boolean,
    isErrorModels: isError as boolean,
  };
}
