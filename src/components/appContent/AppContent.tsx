import CountriesGrid from "@/pages/countriesGrid/CountriesGrid";

import GlobalTheme from "../globalTheme/GlobalTheme";
import Nav from "../nav/Nav";

const AppContent = (): JSX.Element => {
  return (
    <>
      <GlobalTheme />
      <Nav />
      <CountriesGrid />
    </>
  );
};

export default AppContent;
