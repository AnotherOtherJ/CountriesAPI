export type CountryCardProps = {
  country: Country;
};

export type Country = {
  flags: { svg: string };
  population: number;
  capital: string[];
  continents: string[];
  name: {
    common: string;
  };
};

// flag={country.flags.svg}
// countryName={country.name.common}
// population={country.population}
// capital={country.capital}
// continent={country.continents}
