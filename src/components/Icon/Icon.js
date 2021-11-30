import React from "react";
import { serviceIcon } from "./serviceIcon";
import PropTypes from "prop-types";

const Icon = ({ name }) => {
  const IconService = serviceIcon[name];
  return <IconService />;
};

Icon.propTypes = {
  name: PropTypes.string,
};

Icon.defaultProps = {
  name: "",
};

export default Icon;
