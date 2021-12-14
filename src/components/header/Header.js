import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowBackIcon } from './Icons/ArrowBackIcon';
import { useIsMobile } from '../hooks/useIsMobile';
import './header.scss';

export const Header = () => {
  const { code } = useParams();
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const isArrowBackIconVissible = code && isMobile;

  const handleBackToCard = () => {
    if (code) {
      navigate('/');
    }
  };

  return (
    <div className="header">
      <div className="header__content">
        { isArrowBackIconVissible
        && (
        <div
          className="header__arrow-back-icon"
          onClick={handleBackToCard}
          onKeyDown={handleBackToCard}
          role="button"
          tabIndex={0}
        >
          <ArrowBackIcon />
        </div>
        )}

        <div className="header__title">Country list</div>
      </div>

    </div>
  );
};
