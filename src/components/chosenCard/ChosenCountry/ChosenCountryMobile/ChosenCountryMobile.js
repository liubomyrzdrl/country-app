import React from "react";
import { useParams } from "react-router";
import { Flag } from "../../../flag/Flag";
import { RedCircleIcon, GreenCirlceIcon } from "../ChosenCountryIcons";
import { GreetingCountryMobile } from "./GreetingCountryMobile/GreetingCountryMobile";
import { BottomCountryMobileIcon } from "./ChosenCountryMobileIcons";
import PropTypes from "prop-types";
import "./chosenCountryMobile.scss";

export const ChosenCountryMobile = ({ data }) => {
  const { code } = useParams();

  return (
    <div className="chosen-country-mob">
      <GreetingCountryMobile />
      <div className="chosen-country-mob__block">
        <Flag code={code} isGreetingCountry={true} />
        <div className="chosen-country-mob__content">
          <div className="chosen-country-mob__fields">
            <div className="chosen-country-mob__icons">
              <RedCircleIcon width="26" height="27" />
              <div className="bottom-country-mob-icon">
                <BottomCountryMobileIcon />
              </div>
            </div>

            <div className="chosen-country-mob__country-content">
              <div className="chosen-country-mob__title">Country</div>
              <div className="chosen-country-mob__data">
                {" "}
                {data.country.name}
              </div>
            </div>
          </div>

          <div className="chosen-country-mob__fields">
            <div className="chosen-country-mob__icons">
              <GreenCirlceIcon width="26" height="27" />
              <div className="bottom-country-mob-icon">
                <BottomCountryMobileIcon />
              </div>
            </div>

            <div className="chosen-country-mob__country-content">
              <div className="chosen-country-mob__title">Capital</div>
              <div className="chosen-country-mob__data">
                {" "}
                {data.country.capital}
              </div>
            </div>
          </div>

          <div className="chosen-country-mob__fields">
            <div className="chosen-country-mob__icons">
              <RedCircleIcon width="26" height="27" />
              <div className="bottom-country-mob-icon">
                <BottomCountryMobileIcon />
              </div>
            </div>

            <div className="chosen-country-mob__country-content">
              <div className="chosen-country-mob__title">Continent</div>
              <div className="chosen-country-mob__data">
                {" "}
                {data.country.continent.name}
              </div>
            </div>
          </div>

          <div className="chosen-country-mob__fields">
            <div className="chosen-country-mob__icons">
              <GreenCirlceIcon width="26" height="27" />
              <div className="bottom-country-mob-icon">
                <BottomCountryMobileIcon />
              </div>
            </div>

            <div className="chosen-country-mob__country-content">
              <div className="chosen-country-mob__title">Population</div>
              <div className="chosen-country-mob__data">_</div>
            </div>
          </div>

          <div className="chosen-country-mob__fields">
            <div className="chosen-country-mob__icons">
              <RedCircleIcon width="26" height="27" />
              <div className="bottom-country-mob-icon">
                <BottomCountryMobileIcon />
              </div>
            </div>

            <div className="chosen-country-mob__country-content">
              <div className="chosen-country-mob__title">Currency</div>
              <div className="chosen-country-mob__data">
                {" "}
                {data.country.currency}
              </div>
            </div>
          </div>
          <div className="chosen-country-mob__fields">
            <div className="chosen-country-mob__icons">
              <GreenCirlceIcon width="26" height="27" />
              <div className="bottom-country-mob-icon">
                <BottomCountryMobileIcon />
              </div>
            </div>

            <div className="chosen-country-mob__country-content">
              <div className="chosen-country-mob__title">Languges</div>
              <div className="chosen-country-mob__languages chosen-country-mob__data">
                {data.country.languages.map((lang) => (
                  <div
                    className="chosen-country-mob__lang-block"
                    key={lang.name}
                  >
                    <div className="chosen-country-mob__lang"> {lang.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="chosen-country-mob__fields">
            <div className="chosen-country-mob__icons">
              <RedCircleIcon width="26" height="27" />
              <div className="bottom-country-mob-icon">
                <BottomCountryMobileIcon />
              </div>
            </div>

            <div className="chosen-country-mob__country-content">
              <div className="chosen-country-mob__title">Time Zone</div>
              <div className="chosen-country-mob__data">{"-"}</div>
            </div>
          </div>
          <div className="chosen-country-mob__fields">
            <div className="chosen-country-mob__icons">
              <GreenCirlceIcon width="26" height="27" />
            </div>

            <div className="chosen-country-mob__country-content">
              <div className="chosen-country-mob__title">Calling Code</div>
              <div className="chosen-country-mob__data chosen-country-mob__call-call">
                {" "}
                {data.country.phone}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ChosenCountryMobile.propTypes = {
  data: PropTypes.shape({
    country: PropTypes.shape({
      name: PropTypes.string,
      continent: PropTypes.shape({
        name: PropTypes.string,
      }),
      currency: PropTypes.string,
      phone: PropTypes.string,
      languages: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
        })
      ),
      capital: PropTypes.string,
    }),
  }),
};

ChosenCountryMobile.defaultProps = {
  data: {
    country: {
      name: "",
      continent: {
        name: "",
      },
      currency: "",
      phone: "",
      languages: [],
      capital: "",
    },
  },
};
