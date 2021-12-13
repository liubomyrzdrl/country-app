import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Card } from './components/Card/Card';
import { ChosenCountry } from './components/ChosenCountry/ChosenCountry';
import { useIsMobile } from './components/hooks/useIsMobile';
import { Main } from './components/Main/Main';
import { SelectCard } from './components/SelectCard/SelectCard';
import './scss/style.scss';

const App = () => {
  const isMobile = useIsMobile();

  return (
    <div className="App">
      <Routes>
        {isMobile ? (
          <>
            <Route path="/" element={<Main isMobile={isMobile} />}>
              <Route path="/" element={<Card className="card-mobile"><SelectCard isMobile={isMobile} /></Card>} />
            </Route>
            <Route path="country">
              <Route path=":code" element={<ChosenCountry isMobile={isMobile} />} />
            </Route>
          </>
        ) : (
          <Route path="/" element={<Main isMobile={isMobile} />}>
            <Route path="/" element={<Card><SelectCard /></Card>} />
            <Route path="country">
              <Route path=":code" element={<Card><ChosenCountry isMobile={isMobile} /></Card>} />
            </Route>
          </Route>
        )}
      </Routes>
    </div>
  );
};

export default App;
