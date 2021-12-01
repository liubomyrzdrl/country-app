import React from "react";
import { gql } from "@apollo/client";
import { COUNTRY_FIELDS } from "./country/Country";
import { WithQuery } from "../hoc/withQuery";
import { Country } from "./country/Country";
import { useIsMobile } from "../hooks/useIsMobile";
import { SelectCard } from "../selectCard/SelectCard";
import PropTypes from "prop-types";
import "./countries.scss";

export const COUNTRIES__QUERY = gql`
  query getCountries {
    countries {
      ...Country
    }
  }
  ${COUNTRY_FIELDS}
`;

export const Countries = WithQuery(({ data }) => {
  const isMobile = useIsMobile();

  return (
    <div className="countries">
      {!data && <div> The data about countries is not exist</div>}

      {isMobile && <SelectCard className="select-card" isMobile={isMobile} />}

      <div className="countries__block">
        {Array.isArray(data.countries) &&
          data.countries.map((country) => (
            <Country {...country} key={country.code} />
          ))}
      </div>
    </div>
  );
}, COUNTRIES__QUERY);

Countries.propTypes = {
  data: PropTypes.shape({
    countries: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.string,
        name: PropTypes.string,
        capital: PropTypes.string,
        continent: PropTypes.object,
      })
    ),
  }),
};

Countries.defaultProps = {
  data: {
    countries: [],
  },
};
