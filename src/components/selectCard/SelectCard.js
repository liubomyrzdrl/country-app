import React from 'react';
import PropTypes from 'prop-types';
import { SelectCardIcon } from './serviceIcon/ServiceIcon';
import './select-card.scss';

export const SelectCard = ({ isMobile }) => {
  const iconSize = isMobile ? '133' : '266';
  return (
    <div className="select-card">
      <SelectCardIcon size={iconSize} />
      <div className="select-card__title">Choose a card :)</div>
    </div>
  );
};

SelectCard.propTypes = {
  isMobile: PropTypes.bool,
};

SelectCard.defaultProps = {
  isMobile: false,
};
