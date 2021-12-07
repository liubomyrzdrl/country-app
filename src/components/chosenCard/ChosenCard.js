import React from 'react';
import { useParams } from 'react-router';
import { SelectCard } from '../selectCard/SelectCard';
import { useIsMobile } from '../hooks/useIsMobile';
import { ChosenCountry } from './ChosenCountry/ChosenCountry';
import './chosen-card.scss';

export const ChosenCard = () => {
  const isMobile = useIsMobile();
  const { code } = useParams();

  return (
    <div className="chosen-card">
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
