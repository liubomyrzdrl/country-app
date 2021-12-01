import React from "react";
import PropTypes from "prop-types";
import "./flag.scss";

const getFlagUrl = (code) => {
  if (code && typeof code === "string") {
    return `https://flagcdn.com/${code.toLowerCase()}.svg`;
  }
};

export const Flag = ({ code, name, size }) => {
  return (
    <img className={`flag-img ${size}`} src={getFlagUrl(code)} alt={name} />
  );
};

Flag.propTypes = {
  name: PropTypes.string,
  code: PropTypes.string,
  size: PropTypes.string,
};

Flag.defaultProps = {
  name: "",
  code: "",
  size: "",
};
