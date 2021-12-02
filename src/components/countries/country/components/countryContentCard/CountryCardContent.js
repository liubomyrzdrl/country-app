import React from "react";
import "./countryCardContent.scss";
import PropTypes from "prop-types";

export const CountryCardContent = ({ name, capital, continent }) => {
  return (
    <div className="country-card-content">
      <div className="country-card-content__country-block">
        <div className="country-card-content__title">Country</div>
        <div className="country-card-content__name"> {name} </div>
      </div>
      <div className="country-card-content__capital-block">
        <div className="country-card-content__title">Capital</div>
        <div className="country-card-content__capital"> {capital} </div>
      </div>
      <div className="country-card-content__region-block">
        <div className="country-card-content__title">Region</div>
        <div className="country-card-content__continent">{continent.name}</div>
      </div>
    </div>
  );
};

CountryCardContent.propTypes = {
  name: PropTypes.string,
  capital: PropTypes.string,
  continent: PropTypes.shape({
    name: PropTypes.string,
  }),
};

CountryCardContent.defaultProps = {
  name: "",
  capital: "",
  continent: {
    name: "",
  },
};

