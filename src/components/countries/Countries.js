import React from "react";
import { useQuery } from "@apollo/client";
import { COUNTRIES } from "../../graphql/queries/countries";
import { Country } from "./country/Country";
import "./countries.scss";

export const Countries = () => {
  const { loading, error, data } = useQuery(COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="countries">
      {console.log(data)}
      { data.countries.map((country) => (
        <Country {...country} key={country.code} />
      )) }
    </div>
  );
};

