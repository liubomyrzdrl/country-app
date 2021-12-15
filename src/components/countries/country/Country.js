import React from 'react';
import { gql } from '@apollo/client';
import PropTypes from 'prop-types';
import { CountryCardContent } from './CountryContentCard/CountryCardContent';
import './country.scss';
import { Flag } from '../../flag/Flag';
import { useIsMobile } from '../../hooks/useIsMobile';

export const COUNTRY_FIELDS = gql`
  fragment Country on Country {
    code
    name
    capital
    continent {
      name
    }
  }
`;

export const Country = ({
  code, name, capital, continent,
}) => {
  const isMobile = useIsMobile();

  return (
    <div className="country">
      <div className="country__block">
        <Flag code={code} isMobile={isMobile} isGreetingCountry={false} name={name} />
        <CountryCardContent
          name={name}
          capital={capital}
          continent={continent}
        />
      </div>
    </div>
  );
};

Country.propTypes = {
  code: PropTypes.string,
  name: PropTypes.string,
  capital: PropTypes.string,
  continent: PropTypes.object,
};
