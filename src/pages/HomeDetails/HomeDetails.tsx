import React from "react";
import { Link, useParams } from "react-router-dom";
import { useRequest } from "ahooks";
import { MdOutlineKeyboardBackspace } from "react-icons/md/index.js";

import { getCountryByName } from "../../services/countriesService.ts";
import {
  SkeletonCard,
  SkeletonListParagraph,
  SkeletonParagraph,
} from "../../components/index.tsx";

const HomeDetails: React.FC = () => {
  const { name } = useParams();

  const {
    data,
    error,
    loading,
    // run: runGetCountry,
  } = useRequest(() => getCountryByName(name!));

  const skeletonItems = [
    { skeleton: 1, width: "max-w-[16rem]" }, //56
    { skeleton: 2, width: "max-w-[9rem]" }, //36
    { skeleton: 3, width: "max-w-[13rem]" }, //52
    { skeleton: 4, width: "max-w-[11rem]" }, //44
    { skeleton: 5, width: "max-w-[16rem]" }, //56
  ];

  return (
    <div className="flex flex-col items-center p-8">
      <div className="flex justify-start items-center w-full">
        <Link
          to="/"
          className="flex items-center gap-2 bg-white rounded-md px-8 py-2 shadow-md mb-4 dark:bg-[#2B3743]"
        >
          <MdOutlineKeyboardBackspace size={"1.2rem"} />
          Back
        </Link>
      </div>
      {!loading ? (
        !error ? (
          data!.map((country, index) => (
            <div
              key={index}
              className="flex flex-col w-full lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 mt-16"
            >
              <div className="w-full lg:w-1/2">
                <img
                  src={country?.flags.svg}
                  alt={`Flag of ${country?.name.common}`}
                  className="w-full max-w-xl h-auto max-h-72 rounded-md mx-auto shadow-none lg:max-h-96"
                />
              </div>
              <div className="flex flex-col items-center justify-center w-full lg:w-1/2 px-0 lg:px-14">
                <h2 className="text-3xl font-bold w-full mt-10 mb-8 lg:mt-0 lg:mb-4">
                  {country?.name.common}
                </h2>
                <div className="flex flex-col lg:flex-row w-full gap-8">
                  <div className="w-full lg:w-1/2 space-y-4">
                    <p>
                      <strong>Native Name: </strong>
                      {country?.name.nativeName
                        ? country.name.nativeName[
                            Object.keys(country.name.nativeName)[0]
                          ].common
                        : ""}
                    </p>
                    <p>
                      <strong>Population: </strong>
                      {country?.population.toLocaleString()}
                    </p>
                    <p>
                      <strong>Region: </strong>
                      {country?.region}
                    </p>
                    <p>
                      <strong>Sub Region: </strong>
                      {country?.subregion}
                    </p>
                    <p>
                      <strong>Capital: </strong>
                      {country?.capital}
                    </p>
                  </div>
                  <div className="w-full lg:w-1/2 mt-6 lg:mt-0 space-y-4">
                    <p>
                      <strong>Top Level Domain: </strong>
                      {country?.tld}
                    </p>
                    <p>
                      <strong>Currencies: </strong>
                      {Object.values(country?.currencies)
                        .map(
                          (currency) =>
                            `${currency?.name} (${currency?.symbol})`
                        )
                        .join(", ")}
                    </p>
                    <p>
                      <strong>Languages: </strong>
                      {Object.values(country?.languages).join(", ")}
                    </p>
                  </div>
                </div>
                <div className="w-full mt-[10%]">
                  <div className="flex flex-wrap items-center gap-3 lg:flex-row">
                    <strong>Border Countries: </strong>
                    {!country?.borders ? (
                      <span className="bg-white shadow-md rounded-md px-6 py-1 mx-2 dark:bg-[#2B3743]">
                        No data
                      </span>
                    ) : (
                      country?.borders?.map((border, index) => (
                        <span
                          key={index}
                          className="bg-white shadow-md rounded-md px-6 py-1 dark:bg-[#2B3743]"
                        >
                          {border}
                        </span>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">{error.message}</div>
        )
      ) : (
        <div className="flex flex-col w-full lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 mt-16">
          <div className="w-full lg:w-1/2">
            <SkeletonCard skeletonClassName="h-96 max-h-72 mx-auto lg:max-h-96" />
          </div>
          <div className="flex flex-col items-center justify-center w-full lg:w-1/2 px-0 lg:px-14">
            <SkeletonParagraph skeletonClassName="w-full mt-10 mb-8 lg:mt-0 lg:mb-4" />

            <div className="flex flex-col lg:flex-row w-full gap-8">
              <div className="w-full lg:w-1/2 space-y-4">
                <SkeletonListParagraph skeletonItems={skeletonItems} />
              </div>
              <div className="w-full lg:w-1/2 mt-6 lg:mt-0 space-y-4">
                <SkeletonListParagraph skeletonItems={skeletonItems} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeDetails;
