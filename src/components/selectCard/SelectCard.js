import React from "react";
import Icon from "../Icon/Icon";
import PropTypes from "prop-types";
import "./select-card.scss";

export const SelectCard = ({ name, fontSizeTitle }) => {
  return (
    <div className="select-card">
      <Icon {...{ name }} />
      <div
        className="choose-card__title"
        style={{ fontSize: `${fontSizeTitle}px` }}
      >
        Choose a card :)
      </div>
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
