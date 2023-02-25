type IResponse = {
  nome: string;
  codigo: string;
}

interface IFilters {
  brands: string | number;
  models: string | number;
  years: string | number;
}

interface IContext {
  filters: IFilters;
  setFilters: Dispatch<SetStateAction<IFilters>>;
  options: IOptionsPage;
  setOptions: Dispatch<SetStateAction<IOptionsPage>>;
}

interface IProvider {
  children: ReactNode;
}

type IResponsePrice = {
  AnoModelo: number;
  CodigoFipe: string;
  Combustivel: string;
  Marca: string;
  MesReferencia: string;
  Modelo: string;
  SiglaCombustivel: string;
  TipoVeiculo: number;
  Valor: string;
};

interface IOptionsPage {
  brands: IOptionsSelect[];
  models: IOptionsSelect[];
  years: IOptionsSelect[];
}

interface IOptionsSelect {
  label: string,
  value: any
}