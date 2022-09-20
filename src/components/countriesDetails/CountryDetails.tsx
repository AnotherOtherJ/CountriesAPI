import StyledButton from "../button/Button";
import Icon from "../icon/Icon";
import PageWrapper from "../pageWrapper/PageWrapper";
import { Flex, GridContainer, GridHeading, GridParagraph, Image } from "./CountryDetails.style";

// All it's hardcoded for now

const CountryDetails = (): JSX.Element => (
  <PageWrapper>
    <StyledButton>
      <Icon glyph="&#xEC52;" /> Back
    </StyledButton>
    <Flex>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg"
        alt="Belgia flag"
      />
      <GridContainer>
        <GridHeading>Belgium</GridHeading>
        <GridParagraph>Native name: Belgia</GridParagraph>
        <GridParagraph>population: 11,319,511</GridParagraph>
        <GridParagraph>Region: Europe</GridParagraph>
        <GridParagraph>Sub Region: Western Europe</GridParagraph>
        <GridParagraph>Capital: Brussels</GridParagraph>
        <GridParagraph>Top level Domain: .be</GridParagraph>
        <GridParagraph>Currencies: Euro</GridParagraph>
        <GridParagraph>Languages: Dutch, French, German</GridParagraph>
        <GridParagraph>Border Countries: France, Germany, Netherlands</GridParagraph>
      </GridContainer>
    </Flex>
  </PageWrapper>
);
export default CountryDetails;
