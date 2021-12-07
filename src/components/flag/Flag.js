import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './flag.scss';

const getFlagUrl = (code) => {
  if (code && typeof code === 'string') {
    return `https://flagcdn.com/${code.toLowerCase()}.svg`;
  }
  return '';
};

export const Flag = ({
  code, name, isMobile, isGreetingCountry,
}) => {
  const flagClassnames = classnames('flag-img', {
    'flag-img_mobile': isMobile,
    'flag-img_desktop': !isMobile,
    'flag-img_greeting-country': isGreetingCountry,
  });

  return (
    <img
      className={flagClassnames}
      src={getFlagUrl(code)}
      alt={name}
    />
  );
};

Flag.propTypes = {
  name: PropTypes.string,
  code: PropTypes.string,
  isMobile: PropTypes.bool,
  isGreetingCountry: PropTypes.bool,
};

Flag.defaultProps = {
  name: '',
  code: '',
  isMobile: false,
  isGreetingCountry: true,
};
