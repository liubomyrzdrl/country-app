import React from 'react';
import { Outlet } from 'react-router';
import { Countries } from '../Countries/Countries';
import { Header } from '../Header/Header';
import { useIsMobile } from '../hooks/useIsMobile';
import './main.scss';

export const Main = () => {
  const isMobile = useIsMobile();

  return (
    <div className="main">
      <Header />
      {isMobile && <Outlet />}
      <div className="main__content">
        <Countries />
        {!isMobile && <Outlet /> }
      </div>
    </div>
  );
};
