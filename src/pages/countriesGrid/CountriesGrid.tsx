import Filter from "@/components/filter/Filter";
import PageWrapper from "@/components/pageWrapper/PageWrapper";
import Search from "@/components/search/Search";

import { StyledHeader, StyledSection } from "./CountriesGrid.style";

const CountriesGrid = (): JSX.Element => {
  return (
    <PageWrapper>
      <StyledHeader>
        <Search />
        <Filter />
      </StyledHeader>
      <StyledSection>something</StyledSection>
    </PageWrapper>
  );
};
export default CountriesGrid;
