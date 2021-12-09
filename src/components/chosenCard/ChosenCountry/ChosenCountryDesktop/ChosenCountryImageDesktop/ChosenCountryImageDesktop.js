import React from 'react';
import {
  EarthSmileIcon,
  GreenCirlceIcon,
  LanguagesLeftIcon,
  LanguagesRightIcon,
  PopulationBottomIcon,
  PopulationTopIcon,
  RedCircleIcon,
  TimeZoneBottomIcon,
  TimeZoneTopIcon,
  UkraineLeftBottomIcon,
  UkraineRightBottomIcon,
} from '../../ChosenCountryIcons';
import './chosen-card-image-desk.scss';

export const ChosenCountryImageDesktop = () => (
  <div className="chosen-country-img-desk">
    <div className="chosen-country-img-desk__top">
      <div className="ukr-left-bottom-icon">
        <UkraineLeftBottomIcon />
        <div className="top-left-green-icon">
          <GreenCirlceIcon width="40" height="40" />
        </div>
      </div>
      <div className="ukr-center-icon">
        <RedCircleIcon width="40" height="40" />
      </div>
      <div className="ukr-right-bottom-icon">
        <UkraineRightBottomIcon />
        <div className="top-right-green-icon">
          <GreenCirlceIcon width="40" height="40" />
        </div>
      </div>
    </div>

    <div className="chosen-country-img-desk__center">
      <div className="earth-smile_icon">
        <EarthSmileIcon width="266" height="208" />
      </div>

      <div className="chosen-country-img-desk__population">
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

      <div className="chosen-country-img-desk__time-zone">
        <div className="time-zone-top-icon">
          <TimeZoneTopIcon />
        </div>
        <div className="time-zone-center-icon">
          <RedCircleIcon width="40" height="40" />
        </div>
        <div className="time-zone-bottom-icon">
          <TimeZoneBottomIcon />
        </div>
      </div>
    </div>

    <div className="chosen-country-img-desk__bottom">
      <div className="languages-left-icon">
        <div className="bottom-left-green-icon">
          <GreenCirlceIcon width="40" height="40" />
        </div>
        <div className="bottom-lang-left-icon">
          <LanguagesLeftIcon />
        </div>
      </div>
      <div className="bottom-center-red-icon">
        <RedCircleIcon width="40" height="40" />
      </div>
      <div className="languages-right-icon">
        <div className="bottom-right-green-icon">
          <GreenCirlceIcon width="40" height="40" />
        </div>
        <div className="bottom-lang-right-icon">
          <LanguagesRightIcon />
        </div>
      </div>
    </div>
  </div>
);
