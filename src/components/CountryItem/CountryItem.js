import React from 'react';
import PropTypes from 'prop-types';
import './country-item.scss';

export const CountryItem = ({
  title,
  value,
  className,
  isOverflowLangLength,
  isOverflowCurrencyLength,
  isOverflowCallCodeLength,
}) => (
  <div className={className}>
    <span className={`${className}__title`}>{title}</span>
    <div
      className={`${className}__value ${
        (isOverflowLangLength
          || isOverflowCurrencyLength
          || isOverflowCallCodeLength)
        && 'value-overflow'
      }`}
    >
      {value}
    </div>
  </div>
);

CountryItem.propTypes = {
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
  isOverflowLangLength: PropTypes.bool,
  isOverflowCurrencyLength: PropTypes.bool,
  isOverflowCallCodeLength: PropTypes.bool,
};

CountryItem.defaultProps = {
  title: '',
  value: '',
  className: '',
  isOverflowLangLength: false,
  isOverflowCurrencyLength: false,
  isOverflowCallCodeLength: false,
};
