import PropTypes from 'prop-types';
import React from 'react';
import './card.scss';

export const Card = ({ children, className }) => (
  <div className={`card ${className}`}>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
