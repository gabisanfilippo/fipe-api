import { API } from "@services/api"
import { useQuery } from "react-query";

async function getBrands() {
  try {
    const { data } = await API.get("/fipe/api/v1/carros/marcas");
    return data
  } catch (error) {
    console.log('Error at get brands request: ', error)
    throw new Error
  }
}

export function useGetBrands() {
  const { data, isLoading, isError } = useQuery(['getBrands'], async () => {
    return await getBrands()
  })
  return {
    dataBrands: data as IResponse[],
    isLoadingBrands: isLoading as boolean,
    isErrorBrands: isError as boolean,
  };
}