/* eslint-disable react/no-array-index-key */
import React from 'react';
import { gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { COUNTRY_FIELDS, Country } from './country/Country';
import { WithQuery } from '../hoc/withQuery';
import './countries.scss';

export const COUNTRIES__QUERY = gql`
  query getCountries {
    countries {
      ...Country
    }
  }
  ${COUNTRY_FIELDS}
`;

export const Countries = WithQuery(
  ({ data }) => (
    <div className="countries">
      <div className="countries__block">
        {Array.isArray(data.countries)
          && data.countries.map((country, index) => (
            <Link
              to={`/country/${country.code}`}
              key={`${country.code}-${index} `}
            >
              <Country {...country} />
            </Link>
          ))}
      </div>
    </div>
  ),
  COUNTRIES__QUERY
);

Countries.propTypes = {
  data: PropTypes.shape({
    countries: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.string,
        name: PropTypes.string,
        capital: PropTypes.string,
        continent: PropTypes.object,
      })
    ),
  }),
};

Countries.defaultProps = {
  data: {
    countries: [],
  },
};
