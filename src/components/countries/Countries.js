import React from "react";
import { useQuery } from "@apollo/client";
import { COUNTRIES__QUERY } from "../../graphql/queries/countries";
import { Country } from "./country/Country";
import "./countries.scss";

export const Countries = () => {
  const { loading, error, data } = useQuery(COUNTRIES__QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="countries">
      {data.countries &&
        Array.isArray(data.countries) &&
        data.countries.map((country) => (
          <Country {...country} key={country.code} />
        ))}
    </div>
  );
};
