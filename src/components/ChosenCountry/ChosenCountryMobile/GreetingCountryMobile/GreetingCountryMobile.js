import React from 'react';
import './greetingCountryMobile.scss';
import { EarthSmileIcon, GreetingStringIcon } from '../../Icons/ChosenCountryIcons';

export const GreetingCountryMobile = () => (
  <div className="greeting-country-mobile">
    <EarthSmileIcon width="97" height="135" />
    <div className="greeting-country-mobile__greet-str">
      <GreetingStringIcon width="413" height="102" />
    </div>
  </div>
);
