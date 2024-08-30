import { ICountry } from "../types.ts";
import makeApiRequest from "../utils/api.ts";

const getAllCountries = async (): Promise<ICountry[]> => {
  return new Promise((resolve, reject) => {
    makeApiRequest("/all?fields=name,population,region,capital,flags")
      .then((response) => {
        if (!response.ok) {
          reject(new Error("Network response was not ok"));
          return;
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(new Error("Error fetching countries: " + error.message));
      });
  });
};

const getCountriesByName = async (name: string): Promise<ICountry[]> => {
  return new Promise((resolve, reject) => {
    makeApiRequest(`/name/${name}`)
      .then((response) => {
        if (!response.ok) {
          reject(
            new Error(
              "Error fetching countries by name, not found country " + name
            )
          );
          return;
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(new Error("Error fetching countries by name: " + error.message));
      });
  });
};

const getCountriesByRegion = async (region: string): Promise<ICountry[]> => {
  return new Promise((resolve, reject) => {
    makeApiRequest(`/region/${region}`)
      .then((response) => {
        if (!response.ok) {
          reject(
            new Error(
              "Error fetching countries by region, not found region " + region
            )
          );
          return;
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(
          new Error("Error fetching countries by region: " + error.message)
        );
      });
  });
};

const getCountryByName = async (name: string): Promise<ICountry[]> => {
  return new Promise((resolve, reject) => {
    makeApiRequest(`/name/${name}?fullText=true`)
      .then((response) => {
        if (!response.ok) {

          reject(
            new Error(
              "Error fetching country by name, not found country " + name
            )
          );
          return;
        }

        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(new Error("Error fetching country by name: " + error.message));
      });
  });
};

export { getAllCountries, getCountriesByName, getCountriesByRegion, getCountryByName };
