import React from "react";
import { SelectCard } from "../selectCard/SelectCard";
import "./chosen-card.scss";

export const ChosenCard = () => {
  return (
    <div className="chosen-card">
      <div className="chosen-card__header">
        <div className="chosen-card__title">Country list</div>
      </div>
      <div className="chosen-card__content">
        <SelectCard
          className="chosen-card__icon"
          fontSizeTitle={"64"}
          name="selectCardBigIcon"
        />
      </div>
    </div>
  );
};
