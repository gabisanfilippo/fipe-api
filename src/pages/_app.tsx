import { GlobalStyle } from '@styles/index';
import type { AppProps } from 'next/app'
import { useRef } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = useRef(new QueryClient());
  return (
    <QueryClientProvider client={queryClient.current}>
      <GlobalStyle />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
