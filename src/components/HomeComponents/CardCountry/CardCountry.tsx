import React from "react";
import { ICountry } from "../../../types.ts";
import { Link } from "react-router-dom";

const CardCountry: React.FC<{ data: ICountry }> = ({ data }) => {
  return (
    <li className="bg-white shadow-md rounded-lg max-w-xs overflow-hidden dark:bg-[#2B3743]">
      {/* <Link to={`/flag/${data.name.official}`}> */}
      <Link to={`/flag/${encodeURIComponent(data.name.official)}`}>
        <div
          className="h-40 w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${data.flags.svg})` }}
        ></div>
        <div className="p-8">
          <h2 className="text-xl font-bold mb-2">{data.name.common}</h2>
          <p>
            <strong>Population:</strong>
            {data.population}
          </p>
          <p>
            <strong>Region:</strong> {data.region}
          </p>
          <p>
            <strong>Capital:</strong> {data.capital}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default CardCountry;
