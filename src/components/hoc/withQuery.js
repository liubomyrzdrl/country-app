import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router";

export const WithQuery = (WrappedComponent, QUERY, code) => {
  const WithCountries = () => {
    const { code } = useParams();
    const { loading, error, data } = useQuery(QUERY, {
      variables: {
        code,
      },
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return <WrappedComponent {...{ data }} />;
  };
  return WithCountries;
};
