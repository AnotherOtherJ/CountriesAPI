import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import CountriesGrid from "@/pages/countriesGrid/CountriesGrid";

import GlobalTheme from "../globalTheme/GlobalTheme";
import Nav from "../nav/Nav";

const AppContent = (): JSX.Element => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <>
      <GlobalTheme />
      <Nav />
      <QueryClientProvider client={queryClient}>
        <CountriesGrid />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};

export default AppContent;
