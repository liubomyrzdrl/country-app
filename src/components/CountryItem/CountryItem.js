import React from 'react';
import PropTypes from 'prop-types';
import './country-item.scss';
import classNames from 'classnames';

export const CountryItem = ({ title, value, className }) => {
  const classNameMerged = classNames('country-item', className);

  return (
    <div className={classNameMerged}>
      <span className="country-item__title">{title}</span>
      <div className="country-item__value">{value}</div>
    </div>
  );
};

CountryItem.propTypes = {
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
};

CountryItem.defaultProps = {
  title: '',
  value: '',
  className: '',
};
