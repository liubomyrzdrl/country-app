import React from "react";
import PropTypes from "prop-types";
import "./flag.scss";

const getFlagUrl = (code) => {
  if (code && typeof code === "string") {
    return `https://flagcdn.com/${code.toLowerCase()}.svg`;
  }
};

export const Flag = ({ code, name, width, height }) => (
  <img
    className="flag-img"
    src={getFlagUrl(code)}
    {...{ width }}
    {...{ height }}
    alt={name}
  />
);

Flag.propTypes = {
  name: PropTypes.string,
  flagUrl: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

Flag.defaultProps = {
  name: "",
  flagUrl: "",
  width: "",
  height: "",
};
