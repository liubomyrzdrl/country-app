import React from "react";
import "./country.scss";

export const Country = ({ code, name, capital, continent }) => {
  return (
    <div className="country">
      <div className="country__content">
        <div className="country__flag">
          {
            <img
              src={`https://flagcdn.com/${code.toLowerCase()}.svg`}
              width="236"
              height="140"
              alt={name}
            />
          }
        </div>

        <div className="country__text">
          <div className="country__country-block">
            <div className="country__title">Country</div>
            <div className="country__name"> {name} </div>
          </div>
          <div className="country__capital-block">
            <div className="country__title">Capital</div>
            <div className="country__capital"> {capital} </div>
          </div>
          <div className="country__region-block">
            <div className="country__title">Region</div>
            <div className="country__continent"> {continent.name} </div>
          </div>
        </div>
      </div>
    </div>
  );
};

