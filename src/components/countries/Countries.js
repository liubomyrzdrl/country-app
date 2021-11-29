import React from "react";
import  { COUNTRIES__QUERY } from "../../graphql/queries/countries";
import { WithQueryCountries } from "../hoc/withQueryCountries";

import { Country } from "./country/Country";
import "./countries.scss";

export const Countries = WithQueryCountries(({ data }) => {
  return (
    <div className="countries">
      <>{!data && <div> The data about countries is not exist</div>}</>
      <div className="countries__choose-card choose-card">
        <div className="choose-card__img">
          <img src="/smile2.png" alt="smile" />
        </div>
        <div className="choose-card__title">Choose a card :)</div>
      </div>
      <div className="countries__block">
        {Array.isArray(data.countries) &&
          data.countries.map((country) => (
            <Country {...country} key={country.code} />
          ))}
      </div>
    </div>
  );
}, COUNTRIES__QUERY);
