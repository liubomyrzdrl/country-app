import React from 'react';
import PropTypes from 'prop-types';
import { GreetingCountryDesktop } from './GreetingCountryDesktop/GreetingCountryDesktop';
import './chosen-country-desk.scss';
import { CountryItem } from '../../CountryItem/CountryItem';
import { ChosenCountryDesktopIcon } from '../Icons/ChosenCountryIcons';
import { getFirstValue } from './GreetingCountryDesktop/utils';

export const ChosenCountryDesktop = ({ data }) => (
  <div className="chosen-country">
    <GreetingCountryDesktop />
    <CountryItem
      title="Country"
      value={data.country.name}
      className="chosen-country__name"
    />
    <div className="chosen-country__center">
      <div className="chosen-country__left">
        <CountryItem
          title="Capital"
          value={data.country.capital}
          className="chosen-country__capital"
        />
        <CountryItem
          title="Population"
          value="-"
          className="chosen-country__population"
        />
        <CountryItem
          title="Currency"
          value={getFirstValue(data.country.currency)}
          className="chosen-country__currency"
        />
      </div>
      <ChosenCountryDesktopIcon />
      <div className="chosen-country__right">
        <CountryItem
          title="Region"
          value={data.country.continent.name}
          className="chosen-country__continent"
        />
        <CountryItem
          title="Time Zone"
          value="-"
          className="chosen-country__timezone"
        />
        <CountryItem
          title="Calling codes"
          value={getFirstValue(data.country.phone)}
          className="chosen-country__calling-codes"
        />
      </div>
    </div>
    <CountryItem
      title="Official languages"
      value={getFirstValue(data.country.languages)}
      className="chosen-country__language"
    />
  </div>
);

ChosenCountryDesktop.propTypes = {
  data: PropTypes.shape({
    country: PropTypes.shape({
      name: PropTypes.string,
      continent: PropTypes.shape({
        name: PropTypes.string,
      }),
      currency: PropTypes.string,
      phone: PropTypes.string,
      languages: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
        })
      ),
      capital: PropTypes.string,
    }),
  }),
};

ChosenCountryDesktop.defaultProps = {
  data: {
    country: {
      name: '',
      continent: {
        name: '',
      },
      currency: '',
      phone: '',
      languages: [],
      capital: '',
    },
  },
};
