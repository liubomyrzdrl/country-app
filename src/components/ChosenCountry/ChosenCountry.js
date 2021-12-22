import React from 'react';
import { gql } from '@apollo/client';
import PropTypes from 'prop-types';
import { WithQuery } from '../hoc/withQuery';
import { ChosenCountryDesktop } from './ChosenCountryDesktop/ChosenCountryDesktop';
import { ChosenCountryMobile } from './ChosenCountryMobile/ChosenCountryMobile';
import { useIsMobile } from '../hooks/useIsMobile';

const COUNTRY__QUERY = gql`
  query getCountry($code: ID!) {
    country(code: $code) {
      code
      name
      native
      phone
      continent {
        name
      }
      capital
      currency
      languages {
        name
      }
    }
  }
`;

export const ChosenCountry = WithQuery(({ data }) => {
  const isMobile = useIsMobile();
  return !isMobile ? (
    <ChosenCountryDesktop data={data} />
  ) : (
    <ChosenCountryMobile data={data} />
  );
}, COUNTRY__QUERY);

ChosenCountry.propTypes = {
  data: PropTypes.object,
};
