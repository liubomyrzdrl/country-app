import React from "react";
import { SelectCard } from "../selectCard/SelectCard";
import { useIsMobile } from "../hooks/useIsMobile";
import { useParams } from "react-router";
import "./chosen-card.scss";
import { ChosenCountry } from "./ChosenCountry/ChosenCountry";
import { ArrowBackIcon } from "./chosenCarsIcons";

export const ChosenCard = () => {
  const isMobile = useIsMobile();
  const { code } = useParams();

  const handleBackToCard = () => {
    if (isMobile) {
      const chosenCardNode = document.querySelector(".chosen-card");
      chosenCardNode.classList.remove("active-choosen-card");
    }
  };

  return (
    <div className="chosen-card">
      <div className="chosen-card__header">
        <div className="chosen-card__header-content">
          <div
            className="chosen-card__arrow-back-icon"
            onClick={handleBackToCard}
          >
            <ArrowBackIcon />
          </div>
          <div className="chosen-card__title">Country list</div>
        </div>
      </div>

      <div className="chosen-card__content">
        {!code ? (
          <div className="chosen-card__select-card">
            <SelectCard isMobile={isMobile} />
          </div>
        ) : (
          <div className="chosen-card__content-country">
            <ChosenCountry />
          </div>
        )}
      </div>
    </div>
  );
};
