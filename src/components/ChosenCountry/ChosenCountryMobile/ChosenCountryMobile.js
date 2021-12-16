import React from 'react';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';
import { Header } from '../../header/Header';
import { Flag } from '../../flag/Flag';
import { GreetingCountryMobile } from './GreetingCountryMobile/GreetingCountryMobile';
import './chosenCountryMobile.scss';
import { ChosenCountryIconMobile } from '../Icons/ChosenCountryIcons';
import { CountryItem } from '../../CountryItem/CountryItem';
import { getFirstValue } from '../ChosenCountryDesktop/utils';

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
            <CountryItem title="Country" value={data.country.name} />
            <CountryItem title="Capital" value={data.country.capital} />
            <CountryItem
              title="Continent"
              value={data.country.continent.name}
            />
            <CountryItem title="Population" value="-" />
            <CountryItem
              title="Currency"
              value={(
                <div className="chosen-country-mob__currency">
                  {getFirstValue(data.country.currency)}
                </div>
              )}
            />
            <CountryItem
              title="Official languages"
              value={(
                <div className="chosen-country-mob__lang">
                  {getFirstValue(data.country.languages)}
                </div>
              )}
            />
            <CountryItem
              title="Time Zone"
              value="-"
              className="chosen-country-mob-item"
            />
            <CountryItem
              title="Calling Code"
              value={getFirstValue(data.country.phone)}
            />
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
