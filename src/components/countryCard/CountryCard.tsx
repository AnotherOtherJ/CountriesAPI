import StyledCard from "./CountryCard.style";
import type { CountryCardProps } from "./CountryCard.types";

const CountryCard = ({ country, ...rest }: CountryCardProps): JSX.Element => {
  return (
    <StyledCard {...rest}>
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
