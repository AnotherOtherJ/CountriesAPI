import type { Variants } from "framer-motion";
import { useMemo } from "react";

import CountryCard from "@/components/countryCard/CountryCard";
import Filter from "@/components/filter/Filter";
import Loader from "@/components/loader/Loader";
import PageWrapper from "@/components/pageWrapper/PageWrapper";
import Search from "@/components/search/Search";
import useCountries from "@/hooks/useCountries";

import { StyledHeader, StyledSection } from "./CountriesGrid.style";

const CountriesGrid = (): JSX.Element => {
  const { isLoading, isError, error, data } = useCountries();

  const countries = useMemo(() => data ?? [], [data]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>{error instanceof Error ? error.message : "Unable to display error message"}</div>;
  }

  const variant: Variants = {
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <PageWrapper>
      <StyledHeader>
        <Search />
        <Filter />
      </StyledHeader>
      <StyledSection initial="hidden" animate="visible" variants={variant}>
        {countries.map((country, index) => (
          <CountryCard key={`country-${index}`} country={country} variants={variants} />
        ))}
      </StyledSection>
    </PageWrapper>
  );
};
export default CountriesGrid;
