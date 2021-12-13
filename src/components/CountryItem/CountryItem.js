import React from 'react';
import PropTypes from 'prop-types';
import './country-item.scss';

export const CountryItem = ({ title, value, className }) => (
  <div className={className}>
    <span className={`${className}__title`}>{title}</span>
    {Array.isArray(value) ? (
      value.map((lang) => (
        <div key={lang.name} className={`${className}__value`}>
          {lang.name}
        </div>
      ))
    ) : (
      <div className={`${className}__value`}>{value}</div>
    )}
  </div>
);

CountryItem.propTypes = {
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  className: PropTypes.string,
};
