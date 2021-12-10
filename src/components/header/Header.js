import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowBackIcon } from './ArrowBackIcon';
import { useIsMobile } from '../../hooks/useIsMobile';
import './header.scss';

export const Header = () => {
  const { code } = useParams();
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const isShowArrowBackIcon = code && isMobile;

  const handleBackToCard = () => {
    if (code) {
      // const chosenCardNode = document.querySelector('.chosen-card');
      // chosenCardNode.classList.remove('active-choosen-card');
      navigate('/');
    }
  };

  return (
    <div className="header">
      <div className="header__content">
        { isShowArrowBackIcon
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
