import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router';
import { Spinner } from '../Spinner/Spinner';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

export const WithQuery = (WrappedComponent, QUERY) => {
  const WithCountries = () => {
    const { code } = useParams();
    const { loading, error, data } = useQuery(QUERY, {
      variables: {
        code,
      },
    });

    if (loading) return <Spinner />;
    if (error) return <ErrorMessage />;

    return <WrappedComponent {...{ data }} />;
  };
  return WithCountries;
};
