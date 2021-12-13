import React from 'react';
import { useParams } from 'react-router';
import { Flag } from '../../../Flag/Flag';
import { GreetingStringIcon } from '../../Icons/ChosenCountryIcons';
import './greeting-country.scss';

export const GreetingCountryDesktop = () => {
  const { code } = useParams();
  return (
    <div className="greeting-country">
      <GreetingStringIcon width="788" height="188" />
      <div className="greeting-country__flag">
        <Flag code={code} isGreetingCountry />
      </div>
    </div>
  );
};
