import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router';
import './hoc.scss';

export const WithQuery = (WrappedComponent, QUERY) => {
  const WithCountries = () => {
    const { code } = useParams();
    const { loading, error, data } = useQuery(QUERY, {
      variables: {
        code,
      },
    });
    if (loading) return <p className="with-query-loading">Loading...</p>;
    if (error) return <p lassName="with-query-error">Error :(</p>;

    return <WrappedComponent {...{ data }} />;
  };
  return WithCountries;
};
