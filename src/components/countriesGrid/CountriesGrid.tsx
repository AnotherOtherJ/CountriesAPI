import { useMemo } from "react";

import CountryCard from "@/components/countryCard/CountryCard";
import Filter from "@/components/filter/Filter";
import PageWrapper from "@/components/pageWrapper/PageWrapper";
import Search from "@/components/search/Search";
import useCountries from "@/hooks/useCountries";

import { StyledHeader, StyledSection } from "./CountriesGrid.style";

const CountriesGrid = (): JSX.Element => {
  const { isLoading, error, data } = useCountries();
  console.log(data);

  const countries = useMemo(
    () =>
      data &&
      data.map(country => (
        <CountryCard
          key={country.name.common}
          flag={country.flags.svg}
          countryName={country.name.common}
          population={country.population}
          capital={country.capital}
          continent={country.continents}
        />
      )),

    [data],
  );

  return (
    <PageWrapper>
      <StyledHeader>
        <Search />
        <Filter />
      </StyledHeader>
      <StyledSection>
        {isLoading ? (
          <div>Loading</div>
        ) : error instanceof Error ? (
          <div>there was an error {error.message}</div>
        ) : (
          countries
        )}
      </StyledSection>
    </PageWrapper>
  );
};
export default CountriesGrid;
