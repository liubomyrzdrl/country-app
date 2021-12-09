import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { ChosenCountry } from './components/chosenCard/ChosenCountry/ChosenCountry';
import { ChosenCountryMobile } from './components/chosenCard/ChosenCountry/ChosenCountryMobile/ChosenCountryMobile';
import { useIsMobile } from './components/hooks/useIsMobile';
import { Main } from './components/Main/Main';
import './scss/style.scss';

const App = () => {
  const { code } = useParams();
  const isMobile = useIsMobile();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}>
          {!isMobile && (
            <Route path="/country/:code" element={<ChosenCountry />} />
          )}
        </Route>
        {isMobile && (
          <Route
            path="/country/:code"
            element={code ? <ChosenCountryMobile /> : <ChosenCountry />}
          />
        )}
      </Routes>
    </div>
  );
};

export default App;
