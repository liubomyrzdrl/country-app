import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowBackIcon } from '../chosenCard/chosenCarsIcons';
import './header.scss';

export const Header = () => {
  const { code } = useParams();
  const navigate = useNavigate();

  const handleBackToCard = () => {
    if (code) {
      const chosenCardNode = document.querySelector('.chosen-card');
      chosenCardNode.classList.remove('active-choosen-card');
      navigate('/');
    }
  };

  return (
    <div className="header">
      <div className="header__content">
        { code
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
