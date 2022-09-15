import StyledCard from "./CountryCard.style";
import type { CountryCardProps } from "./CountryCard.types";

const CountryCard = ({
  capital,
  continent,
  countryName,
  flag,
  population,
}: CountryCardProps): JSX.Element => {
  return (
    <StyledCard>
      <img src={flag} alt={`${countryName} flag`} />
      <div>
        <h2>{countryName}</h2>
        <p>Population: {population}</p>
        <p>Region: {continent}</p>
        <p>Capital: {capital}</p>
      </div>
    </StyledCard>
  );
};
export default CountryCard;
