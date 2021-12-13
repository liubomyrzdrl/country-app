import React from 'react';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';
import { Header } from '../../Header/Header';
import { Flag } from '../../Flag/Flag';
import { GreetingCountryMobile } from './GreetingCountryMobile/GreetingCountryMobile';
import './chosenCountryMobile.scss';
import { ChosenCountryIconMobile } from '../Icons/ChosenCountryIcons';
import { CountryItem } from '../../CountryItem/CountryItem';

export const ChosenCountryMobile = ({ data }) => {
  const { code } = useParams();

  return (
    <div className="chosen-country-mob">
      <Header />
      <GreetingCountryMobile />
      <div className="chosen-country-mob__block">
        <Flag code={code} isGreetingCountry />
        <div className="chosen-country-mob__content">
          <ChosenCountryIconMobile />
          <div className="chosen-country-mob__content-data">
            <div className="chosen-country-mob__country-content">
              <CountryItem
                title="Country"
                value={data.country.name}
                className="chosen-country-mob-item"
              />
            </div>
            <div className="chosen-country-mob__country-content">
              <CountryItem
                title="Capital"
                value={data.country.capital}
                className="chosen-country-mob-item"
              />
            </div>
            <div className="chosen-country-mob__country-content">
              <CountryItem
                title="Continent"
                value={data.country.continent.name}
                className="chosen-country-mob-item"
              />
            </div>
            <div className="chosen-country-mob__country-content">
              <CountryItem
                title="Population"
                value="-"
                className="chosen-country-mob-item"
              />
            </div>
            <div className="chosen-country-mob__country-content">
              <CountryItem
                title="Currency"
                value={data.country.currency}
                className="chosen-country-mob-item"
              />
            </div>
            <div className="chosen-country-mob__country-content">
              <div className="chosen-country-mob__title">Languges</div>
              <div className="chosen-country-mob__languages chosen-country-mob__data">
                {data.country.languages.map((lang) => (
                  <div
                    className="chosen-country-mob__lang-block"
                    key={lang.name}
                  >
                    <div className="chosen-country-mob__lang">
                      {lang.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="chosen-country-mob__fields">
              <div className="chosen-country-mob__country-content">
                <CountryItem
                  title="Time Zone"
                  value="-"
                  className="chosen-country-mob-item"
                />
              </div>
            </div>
            <div className="chosen-country-mob__fields">

              <div className="chosen-country-mob__country-content">
                <CountryItem
                  title="Calling Code"
                  value="-"
                  className="chosen-country-mob-item"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ChosenCountryMobile.propTypes = {
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

ChosenCountryMobile.defaultProps = {
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
