import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai/index.js";
import { useRequest, useSetState } from "ahooks";
import {
  InputWithIcon,
  ListCountries,
  Select,
  Pagination
} from "../../components/index.tsx";
import {
  getAllCountries,
  getCountriesByName,
  getCountriesByRegion,
} from "../../services/countriesService.ts";

const HomePage: React.FC = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;

  const [search, setSearch] = useSetState<{
    valueInput: string;
    valueSelect: string;
  }>({ valueInput: "", valueSelect: "" });

  const {
    data,
    error,
    loading,
    run: runGetCountries,
  } = useRequest((filter, value?) => {
    if (filter == "region") {
      return getCountriesByRegion(value);
    }
    if (filter == "name") {
      return getCountriesByName(search.valueInput);
    }
    return getAllCountries();
  });

  return (
    <div>
      <div className="flex items-center justify-between w-full py-5 gap-3">
        <InputWithIcon
          icon={<AiOutlineSearch size={"1.2rem"} />}
          placeholder="Search for a country..."
          value={search.valueInput}
          onChange={(e) => setSearch({ valueInput: e.target.value })}
          onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === "Enter") {
              if (search.valueInput != "") {
                runGetCountries("name", event.currentTarget.value);
              } else {
                runGetCountries("");
              }
              setPage(1)
            }
          }}
        />
        <Select
          value={search.valueSelect}
          onChange={(e) => {
            setSearch({ valueSelect: e.target.value });
            if (e.target.value != "") {
              runGetCountries("region", e.currentTarget.value);
            } else {
              runGetCountries("");
            }
            setPage(1)
          }}
        >
          <option value="" disabled>
            Filter by Region
          </option>
          <option value="">All Regions</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </Select>
      </div>

      <>
        <ListCountries
          data={data}
          page={page}
          itemsPerPage={itemsPerPage}
          loading={loading}
          error={error}
        />
        <Pagination
          page={page}
          setPage={setPage}
          data={data}
          itemsPerPage={itemsPerPage}
          loading={loading}
          error={error}
        />
      </>
    </div>
  );
};

export default HomePage;
