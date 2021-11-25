import React from "react";
import PropTypes from "prop-types";
import { getFlagUrl } from "./utils";
import "./country-flag.scss"

export const CountryFlag = ({ code, name }) => {
  return (
    <div className="country-flag">
      {
        <img
          src={getFlagUrl(code)}
          width="236"
          height="140"
          alt={name}
        />
      }
    </div>
  );
};

CountryFlag.propTypes = {
  code: PropTypes.string,
  name: PropTypes.string,
};
