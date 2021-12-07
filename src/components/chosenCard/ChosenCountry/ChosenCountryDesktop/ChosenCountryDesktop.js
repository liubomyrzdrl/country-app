import React from 'react';
import PropTypes from 'prop-types';
import {
  GreenCirlceIcon,
  RedCircleIcon,
  UkraineLeftBottomIcon,
  UkraineRightBottomIcon,
  PopulationTopIcon,
  TimeZoneTopIcon,
  PopulationBottomIcon,
  TimeZoneBottomIcon,
  LanguagesLeftIcon,
  LanguagesRightIcon,
  EarthSmileIcon,
} from '../ChosenCountryIcons';
import { GreetingCountryDesktop } from './GreetingCountryDesktop/GreetingCountryDesktop';
import './chosen-country-desk.scss';

export const ChosenCountryDesktop = ({ data }) => (
  <div className="chosen-country">
    <GreetingCountryDesktop />
    <div className="chosen-country__name-block">
      <div className="chosen-country__title">Country</div>
      <div className="chosen-country__name">{data.country.name}</div>
      <div className="chosen-country__name-icons">
        <div className="ukr-left-bottom-icon">
          <UkraineLeftBottomIcon />
        </div>
        <div>
          <RedCircleIcon width="40" height="40" />
        </div>
        <div className="ukr-right-bottom-icon">
          <UkraineRightBottomIcon />
        </div>
      </div>
    </div>

    <div className="chosen-country__capital-continent">
      <div className="chosen-country__capital-block">
        <div className="chosen-country__content">
          <div className="chosen-country__title">Capital</div>
          <div className="chosen-country__capital">
            {data.country.capital}
          </div>
        </div>
        <div className="capital-icon">
          <GreenCirlceIcon width="40" height="40" />
        </div>
      </div>

      <div className="chosen-country__сontinent-block">
        <div className="continent-icon">
          <GreenCirlceIcon width="40" height="40" />
        </div>
        <div className="chosen-country__content">
          <div className="chosen-country__title">Region</div>
          <div className="chosen-country__сontinent">
            {data.country.continent.name}
          </div>
        </div>
      </div>
    </div>

    <div className="chosen-country__population-timezone">
      <div className="earth-smile_icon">
        <EarthSmileIcon width="266" height="208" />
      </div>
      <div className="chosen-country__population-block">
        <div className="chosen-country__content content-population-country">
          <div className="chosen-country__title">Population</div>
          <div className="chosen-country__population"> - </div>
        </div>
        <div className="chosen-country__population-icons">
          <div className="population-top-icon">
            <PopulationTopIcon />
          </div>
          <div className="population-center-icon">
            <RedCircleIcon width="40" height="40" />
          </div>
          <div className="population-bottom-icon">
            <PopulationBottomIcon />
          </div>
        </div>
      </div>

      <div className="chosen-country__timezone-block">
        <div className="chosen-country__timezone-icons">
          <div className="time-zone-top-icon">
            <TimeZoneTopIcon />
          </div>
          <div className="time-zone-center-icon">
            <RedCircleIcon width="40" height="40" />
          </div>
          <div className="time-zone-bottom-icons">
            <TimeZoneBottomIcon />
          </div>
        </div>

        <div className="chosen-country__content content-timezone-country">
          <div className="chosen-country__title">Time Zone</div>
          <div className="chosen-country__timezone">-</div>
        </div>
      </div>
    </div>

    <div className="chosen-country__currency-callcodes">
      <div className="chosen-country__сurrency-block content-courency-country-block">
        <div className="chosen-country__content content-currency-country">
          <div className="chosen-country__title">Currency</div>
          <div className="chosen-country__сurrency">
            {data.country.currency}
          </div>
        </div>
        <div className="currency-icon">
          <GreenCirlceIcon width="40" height="40" />
        </div>
      </div>

      <div className="chosen-country__call-codes-block content-call-codes-country-block">
        <div className="call-codes-icon">
          <GreenCirlceIcon width="40" height="40" />
        </div>
        <div className="chosen-country__content content-call-codes-country">
          <div className="chosen-country__title">Calling codes</div>
          <div className="chosen-country__call-codes">
            {data.country.phone}
          </div>
        </div>
      </div>
    </div>

    <div className="chosen-country__language-block">
      <div className="chosen-country__name-icons">
        <div className="languages-left-icon">
          <LanguagesLeftIcon />
        </div>
        <div>
          <RedCircleIcon width="40" height="40" />
        </div>
        <div className="languages-right-icon">
          <LanguagesRightIcon />
        </div>
      </div>
      <div className="chosen-country__title">Official languages</div>
      <div className="chosen-country__language">
        {data.country.languages.map((lang) => (
          <div key={lang.name}>{lang.name}</div>
        ))}
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
