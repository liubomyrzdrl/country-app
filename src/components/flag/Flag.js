import React from "react";
import PropTypes from "prop-types";
import "./flag.scss";

export const Flag = ({ flagUrl, name, width, height }) => (
  <img
    className="flag-img"
    src={flagUrl}
    {...{ width }}
    {...{ height }}
    alt={name}
  />
);


Flag.propTypes = {
  name: PropTypes.string,
  flagUrl: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

Flag.defaultProps = {
  name: "",
  flagUrl: "",
  width: "",
  height: ""
};
