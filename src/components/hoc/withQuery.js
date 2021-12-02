import React from "react";
import { useQuery } from "@apollo/client";

export const WithQuery = (WrappedComponent, QUERY) => {
  const WithCountries = () => {
    const { loading, error, data } = useQuery(QUERY);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return <WrappedComponent {...{ data }} />;
  };
  return WithCountries;
};
