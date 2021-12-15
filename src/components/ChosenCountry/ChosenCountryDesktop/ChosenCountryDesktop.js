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
    <div className="chosen-country__name-block">
      <CountryItem
        title="Country"
        value={data.country.name}
        className="chosen-country-item"
      />
    </div>
    <div className="chosen-country__center">
      <div className="chosen-country__left">
        <div className="chosen-country__capital-block">
          <CountryItem
            title="Capital"
            value={data.country.capital}
            className="chosen-country-item"
          />
        </div>

        <div className="chosen-country__population-block">
          <CountryItem
            title="Population"
            value="-"
            className="chosen-country-item"
          />
        </div>

        <div className="chosen-country__сurrency-block">
          <CountryItem
            title="Currency"
            value={getFirstValue(data.country.currency)}
            className="chosen-country-item"
          />
        </div>
      </div>
      <ChosenCountryDesktopIcon />

      <div className="chosen-country__right">
        <div className="chosen-country__сontinent-block">
          <CountryItem
            title="Region"
            value={data.country.continent.name}
            className="chosen-country-item"
          />
        </div>
        <div className="chosen-country__timezone-block">
          <CountryItem
            title="Time Zone"
            value="-"
            className="chosen-country-item"
          />
        </div>
        <div className="chosen-country__call-codes-block">
          <CountryItem
            title="Calling codes"
            value={getFirstValue(data.country.phone)}
            className="chosen-country-item"
          />
        </div>
      </div>
    </div>

    <div className="chosen-country__language-block">
      <CountryItem
        title="Official languages"
        value={getFirstValue(data.country.languages)}
        className="chosen-country-item"
      />
    </div>
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
