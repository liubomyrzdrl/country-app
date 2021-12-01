import React from "react";
import { gql } from "@apollo/client";
import PropTypes from "prop-types";
import { CountryCardContent } from "./components/countryContentCard/CountryCardContent";
import "./country.scss";
import { Flag } from "../../flag/Flag";
import { useSizeFlag } from "../../hooks/useSizeFlag";

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

export const Country = ({ code, name, capital, continent }) => {
  return (
    <div className="country">
      <div className="country__block">
        <Flag code={code} size={useSizeFlag()} name={name} />
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
