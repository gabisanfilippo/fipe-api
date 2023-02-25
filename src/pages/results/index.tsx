import { FiltersContext } from '@context/FiltersContext';
import { useGetPrices } from '@services/GET/useGetPrice';
import * as S from '@styles/pages/Results'
import { Context, useContext, useEffect } from 'react';

export default function Results() {
  const { filters, setFilters } = useContext(
    FiltersContext as Context<IContext>
  );

  const { dataPrices, isLoadingPrices, isErrorPrices } = useGetPrices(filters)

  useEffect(() => {console.log(dataPrices);}, [dataPrices]);
  return (
    <S.Container>
      {isLoadingPrices && <p>Carregando...</p>}
      {isErrorPrices && <p>Erro ao carregar :/</p>}
      {dataPrices && (
        <S.ResultsContainer>
          <h1>Tabela Fipe: Preço {dataPrices.Marca} {dataPrices.Modelo} {dataPrices.AnoModelo}</h1>
          <span>{dataPrices.Valor}</span>
          <p>Este é o preço da compra do veículo</p>
        </S.ResultsContainer>
      )}
    </S.Container>
  );
}