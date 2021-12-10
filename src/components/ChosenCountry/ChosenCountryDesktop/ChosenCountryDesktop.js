import React from 'react';
import PropTypes from 'prop-types';
import { GreetingCountryDesktop } from './GreetingCountryDesktop/GreetingCountryDesktop';
import './chosen-country-desk.scss';
import { ChosenCountryImageDesktop } from './ChosenCountryImageDesktop/ChosenCountryImageDesktop';

export const ChosenCountryDesktop = ({ data }) => (
  <div className="chosen-country">
    <GreetingCountryDesktop />
    <div className="chosen-coutry__content">
      <div className="chosen-country__name-block">
        <div className="chosen-country__title">Country</div>
        <div className="chosen-country__name">{data.country.name}</div>
      </div>

      <div className="chosen-country__center">
        <div className="chosen-country__left">

          <div className="chosen-country__capital-block">
            <div className="chosen-country__title">Capital</div>
            <div className="chosen-country__capital">
              {data.country.capital}
            </div>
          </div>

          <div className="chosen-country__population-block">
            <div className="chosen-country__title">Population</div>
            <div className="chosen-country__population"> - </div>
          </div>

          <div className="chosen-country__сurrency-block">
            <div className="chosen-country__title">Currency</div>
            <div className="chosen-country__сurrency">
              {data.country.currency}
            </div>
          </div>
        </div>
        <ChosenCountryImageDesktop />
        <div className="chosen-country__right">
          <div className="chosen-country__сontinent-block">
            <div className="chosen-country__title">Region</div>
            <div className="chosen-country__сontinent">
              {data.country.continent.name}
            </div>
          </div>
          <div className="chosen-country__timezone-block">
            <div className="chosen-country__title">Time Zone</div>
            <div className="chosen-country__timezone">-</div>
          </div>
          <div className="chosen-country__call-codes-block">
            <div className="chosen-country__title">Calling codes</div>
            <div className="chosen-country__call-codes">
              {data.country.phone}
            </div>
          </div>
        </div>
      </div>

      <div className="chosen-country__language-block">
        <div className="chosen-country__title">Official languages</div>
        <div className="chosen-country__language">
          {data.country.languages.map((lang) => (
            <div key={lang.name}>{lang.name}</div>
          ))}
        </div>
      </div>
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
