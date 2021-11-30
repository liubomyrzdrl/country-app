import React from "react";
import { gql } from "@apollo/client";
import PropTypes from "prop-types";
import { CountryCardContent } from "./components/countryContentCard/CountryCardContent";
import "./country.scss";
import { Flag } from "../../flag/Flag";

export const COUNTRY_FIELDS = gql`
  fragment Country on Country {
    code
    name
    capital
    continent {
      name
    }
  }
`;

export function getFlagUrl(code) {
  if (code && typeof code === "string") {
    return `https://flagcdn.com/${code.toLowerCase()}.svg`;
  }
}

export const Country = ({ code, name, capital, continent }) => {
  return (
    <div className="country">
      <div className="country__block">
        <Flag flagUrl={getFlagUrl(code)} width={"236"} height={"140"}  {...name} />
        <CountryCardContent
          name={name}
          capital={capital}
          continent={continent}
        />
      </div>
    </div>
  );
};

Country.propTypes = {
  code: PropTypes.string,
  name: PropTypes.string,
  capital: PropTypes.string,
  continent: PropTypes.object,
};
