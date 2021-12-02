import React from "react";
import PropTypes from "prop-types";
import "./flag.scss";

const getFlagUrl = (code) => {
  if (code && typeof code === "string") {
    return `https://flagcdn.com/${code.toLowerCase()}.svg`;
  }
};

export const Flag = ({ code, name, isMobile }) => {
  return (
    <img
      className={`flag-img flag-img${isMobile ? "_mobile" : "_desktop"}`}
      src={getFlagUrl(code)}
      alt={name}
    />
  );
};

Flag.propTypes = {
  name: PropTypes.string,
  code: PropTypes.string,
  isMobile: PropTypes.bool,
};

Flag.defaultProps = {
  name: "",
  code: "",
  isMobile: false,
};
