import StyledCard from "./CountryCard.style";
import type { CountryCardProps } from "./CountryCard.types";

const CountryCard = ({ country }: CountryCardProps): JSX.Element => {
  return (
    <StyledCard>
      <img src={country.flags.svg} alt={`${country.name.common}-flag`} />
      <div>
        <h2>{country.name.common}</h2>
        <p>Population: {country.population}</p>
        <p>Region: {country.continents}</p>
        <p>Capital: {country.capital}</p>
      </div>
    </StyledCard>
  );
};
export default CountryCard;
