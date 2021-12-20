import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MockedProvider } from '@apollo/client/testing';
import App from './App';

const mocks = [];

test('it should render App component', () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Router>
        <App />
      </Router>
    </MockedProvider>
  );
});
