// src/types.ts
import { ReactNode } from "react";

export interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
}

export interface ThemeProviderProps {
  children?: ReactNode;
}

export enum ThemeMode {
  Light = "light",
  Dark = "dark",
}

export interface IPagination {
  data: any[] | undefined;
  setPage: (page: number) => void;
  page: number;
  itemsPerPage: number;
  loading: boolean;
  error: Error | undefined;
}

export interface IListCountries {
  data: ICountry[] | undefined;
  page: number;
  itemsPerPage: number;
  loading: boolean;
  error: Error | undefined;
}

export interface ListCardProps {
  children: ReactNode;
}

export interface ApiRequest {
  data: ICountry[];
  method?: string;
  endpoint?: string;
}

export interface ApiResponse {
  data: ICountry[];
  error?: string;
  message?: string;
}

export interface NativeName {
  [lang: string]: {
    common: string;
    official: string;
    native: string;
  };
}

export interface Currencies {
  [code: string]: {
    name: string;
    symbol: string;
  };
}

export interface Translations {
  [code: string]: {
    official: string;
    common: string;
  };
}

export interface Demonyms {
  [code: string]: {
    f: string;
    m: string;
  };
}

export interface ICountry {
  name: {
    common: string;
    official: string;
    nativeName: NativeName;
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: {
    root: string;
    suffixes: string[];
  };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: {
    [code: string]: string;
  };
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  gini: {
    [year: string]: number;
  };
  fifa: string;
  car: {
    signs: string[];
    side: string;
  };
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  coatOfArms: {
    png: string;
    svg: string;
  };
  startOfWeek: string;
  capitalInfo: {
    latlng: number[];
  };
}

export interface ISkeletonParagraph {
  skeletonItems: { skeleton: number; width?: string }[];
}
