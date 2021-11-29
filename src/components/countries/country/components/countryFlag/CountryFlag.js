import React from "react";
import { Flag } from "../../../../flag/Flag";
import PropTypes from "prop-types";
import "./country-flag.scss";

export function getFlagUrl(code) {
  if (code && typeof code === "string") {
    return `https://flagcdn.com/${code.toLowerCase()}.svg`;
  }
}

export const CountryFlag = ({ code, name }) => {
  return (
    <div className="country-flag">
      <Flag flagUrl={getFlagUrl(code)} width={"236"} height={"140"} {...name} />
    </div>
  );
};

CountryFlag.propTypes = {
  code: PropTypes.string,
  name: PropTypes.string,
};
