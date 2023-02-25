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
}

interface IProvider {
  children: ReactNode;
}