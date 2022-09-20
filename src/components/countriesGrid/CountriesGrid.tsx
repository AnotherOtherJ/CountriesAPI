import CountryCard from "@/components/countryCard/CountryCard";
import Filter from "@/components/filter/Filter";
import PageWrapper from "@/components/pageWrapper/PageWrapper";
import Search from "@/components/search/Search";
import useCountries from "@/hooks/useCountries";

import { StyledHeader, StyledSection } from "./CountriesGrid.style";

const CountriesGrid = (): JSX.Element => {
  const { isLoading, isError, error, data } = useCountries();
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error instanceof Error ? error.message : "Unable to display error message"}</div>;
  }

  return (
    <PageWrapper>
      <StyledHeader>
        <Search />
        <Filter />
      </StyledHeader>
      <StyledSection>
        {data.map((country, index) => (
          <CountryCard key={`country-${index}`} country={country} />
        ))}
      </StyledSection>
    </PageWrapper>
  );
};
export default CountriesGrid;
