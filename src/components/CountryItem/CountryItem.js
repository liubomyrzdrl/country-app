import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './country-item.scss';

export const CountryItem = ({
  title,
  value,
  className,
  isOverflow,
}) => {
  const classNameMerged = classNames('country-item', className, {
    'country-item--overflow': isOverflow
  })
  return (
    <div className={classNameMerged}>
      <span className="country-item__title">{title}</span>
      <div className="country-item__value">
        {value}
      </div>
    </div>
  )
};

CountryItem.propTypes = {
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
  isOverflow: PropTypes.bool,
};

CountryItem.defaultProps = {
  title: '',
  value: '',
  className: '',
  isOverflow: false
};
