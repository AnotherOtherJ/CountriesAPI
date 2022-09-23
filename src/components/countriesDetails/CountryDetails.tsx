import StyledButton from "../button/Button";
import Icon from "../icon/Icon";
import PageWrapper from "../pageWrapper/PageWrapper";
import {
  Bold,
  Flex,
  GridContainer,
  GridHeading,
  GridParagraph,
  Image,
  Something,
} from "./CountryDetails.style";

// All it's hardcoded for now

const CountryDetails = (): JSX.Element => (
  <Something>
    <StyledButton>
      <Icon glyph="&#xE0A6;" /> Back
    </StyledButton>
    <Flex>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg"
        alt="Belgia flag"
      />
      <GridContainer>
        <GridHeading>Belgium</GridHeading>
        <GridParagraph>
          <Bold>Native name:</Bold> Belgia
        </GridParagraph>
        <GridParagraph>
          <Bold>Population:</Bold> 11,319,511
        </GridParagraph>
        <GridParagraph>
          <Bold>Region:</Bold> Europe
        </GridParagraph>
        <GridParagraph>
          <Bold>Sub Region:</Bold> Western Europe
        </GridParagraph>
        <GridParagraph>
          <Bold>Capital:</Bold> Brussels
        </GridParagraph>
        <GridParagraph>
          <Bold>Top level Domain:</Bold> .be
        </GridParagraph>
        <GridParagraph>
          <Bold>Currencies:</Bold> Euro
        </GridParagraph>
        <GridParagraph>
          <Bold>Languages:</Bold> Dutch, French, German
        </GridParagraph>
        <GridParagraph>
          <Bold>Border Countries:</Bold>
          <StyledButton>France</StyledButton>
          <StyledButton>Germany</StyledButton>
          <StyledButton>Netherlands</StyledButton>
        </GridParagraph>
      </GridContainer>
    </Flex>
  </Something>
);
export default CountryDetails;
