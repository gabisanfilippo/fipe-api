import { FiltersContextProvider } from "@context/FiltersContext";
import { GlobalStyle } from "@styles/index";
import type { AppProps } from "next/app";
import { useEffect, useRef } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

export default function App({ Component, pageProps }: AppProps) {
  const queryClientRef = useRef<QueryClient>();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          staleTime: 300000,
        },
      },
    });
  }

  useEffect(() => {console.log(pageProps.dehydratedState);}, [pageProps]);
  return (
    <FiltersContextProvider>
      <QueryClientProvider client={queryClientRef.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <GlobalStyle />
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </FiltersContextProvider>
  );
}
