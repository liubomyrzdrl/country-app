import React from 'react';
import './greetingCountryMobile.scss';
import { EarthSmileIcon, GreetingStringIcon } from '../../ChosenCountryIcons';

export const GreetingCountryMobile = () => (
  <div className="greeting-country-mobile">
    <div className="greeting-country-mobile__earth-icon">
      <EarthSmileIcon width="97" height="135" />
    </div>
    <div className="greeting-country-mobile__greet-str">
      <GreetingStringIcon width="413" height="102" />
    </div>
  </div>
);
