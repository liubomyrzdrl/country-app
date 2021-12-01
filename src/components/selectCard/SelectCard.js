import React from "react";
import PropTypes from "prop-types";
import { SelectCardIcon } from "../Icon/serviceIcon";
import "./select-card.scss";

export const SelectCard = ({ isMobile }) => {
  return (
    <div className="select-card">
      {isMobile ? (
        <SelectCardIcon width={133} height={133} />
      ) : (
        <SelectCardIcon width={266} height={266} />
      )}

      <div className="select-card__title">Choose a card :)</div>
    </div>
  );
};

SelectCard.propTypes = {
  name: PropTypes.string,
  fontSizeTitle: PropTypes.string,
};

SelectCard.defaultProps = {
  name: "",
  capital: "",
  fontSizeTitle: "",
};
