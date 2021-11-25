import React from "react";
import { ChosenCard } from "../chosenCard/ChosenCard";
import { Countries } from "../countries/Countries";
import { Header } from "../header/Header";
import "./main.scss";

export const Main = () => {
  return (
    <div className="main">
      <Header />
      <div className="main__content">
        <Countries />
        <ChosenCard />
      </div>
    </div>
  );
};

