import React from "react";
import { SelectCard } from "../selectCard/SelectCard";
import { useIsMobile } from "../hooks/useIsMobile";
import "./chosen-card.scss";

export const ChosenCard = () => {
  const isMobile = useIsMobile();
  return (
    <div className="chosen-card">
      <div className="chosen-card__header">
        <div className="chosen-card__title">Country list</div>
      </div>
      <div className="chosen-card__content">
        <SelectCard className="select-card" isMobile={isMobile} />
      </div>
    </div>
  );
};
