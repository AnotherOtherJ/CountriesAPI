import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import CountriesGrid from "@/components/countriesGrid/CountriesGrid";

import CountryDetails from "../countriesDetails/CountryDetails";
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
      <CountryDetails />
      <QueryClientProvider client={queryClient}>
        <CountriesGrid />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};

export default AppContent;
