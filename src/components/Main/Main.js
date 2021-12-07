import React from 'react';
import { ChosenCard } from '../chosenCard/ChosenCard';
import { Countries } from '../countries/Countries';
import { Header } from '../header/Header';
import { useIsMobile } from '../hooks/useIsMobile';
import { SelectCard } from '../selectCard/SelectCard';
import './main.scss';

export const Main = () => {
  const isMobile = useIsMobile();
  return (
    <div className="main">
      <Header />
      {isMobile && (
        <div className="main__select-card">
          <SelectCard isMobile={isMobile} />
        </div>
      )}
      <div className="main__content">
        <Countries />
        <ChosenCard />
      </div>
    </div>
  );
};
