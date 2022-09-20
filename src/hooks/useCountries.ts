import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type CountriesAPIRes = {
  borders: string[];
  capital: string[];
  continents: string[];
  currencies: { name: string; symbol: string };
  flags: { png: string; svg: string };
  languages: Record<string, Record<string, string>>;
  name: { common: string; official: string; nativeName: Record<string, Record<string, string>> };
  population: number;
  subregion: string;
  tld: string[];
};

const useCountries = () => {
  return useQuery(["countryData"], async (): Promise<CountriesAPIRes[]> => {
    const { data } = await axios.get<CountriesAPIRes[]>(
      "https://restcountries.com/v3.1/all?fields=name,capital,currencies,population,continents,tld,subregion,borders,languages,flags",
    );
    return data;
  });
};

export default useCountries;
