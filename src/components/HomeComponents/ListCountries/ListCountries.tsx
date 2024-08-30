import React from "react";
import { IListCountries } from "../../../types.ts";
import CardCountry from "../CardCountry/CardCountry.tsx";
import { SkeletonCard, SkeletonListCard } from "../../index.tsx";

const ListCountries: React.FC<IListCountries> = ({
  data,
  page,
  itemsPerPage,
  loading,
  error,
}) => {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <>
      {!loading ? (
        !error ? (
          <ul
            className="grid gap-6 justify-evenly"
            style={{
              gridTemplateColumns: "repeat(auto-fill, 320px)",
            }}
          >
            {data?.slice(startIndex, endIndex).map((country, index) => (
              <CardCountry key={index} data={country} />
            ))}
          </ul>
        ) : (
          <div className="text-center">{error.message}</div>
        )
      ) : (
        <SkeletonListCard>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((skeleton) => (
            <SkeletonCard key={skeleton} />
          ))}
        </SkeletonListCard>
      )}
    </>
  );
};

export default ListCountries;
