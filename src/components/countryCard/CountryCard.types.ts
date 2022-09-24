import type { MotionProps } from "framer-motion";

export type CountryCardProps = {
  country: Country;
} & MotionProps;

export type Country = {
  flags: { svg: string };
  population: number;
  capital: string[];
  continents: string[];
  name: {
    common: string;
  };
};
