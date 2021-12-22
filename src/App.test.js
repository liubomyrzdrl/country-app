import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MockedProvider } from '@apollo/client/testing';
import App from './App';
import { useIsMobile } from './components/hooks/useIsMobile';

jest.mock('./components/hooks/useIsMobile', () => ({
  useIsMobile: jest.fn(),
}));

describe('Test App', () => {
  test('it should render desktop version App component', () => {
    useIsMobile.mockImplementation(() => false);
    const { container } = render(
      <MockedProvider>
        <Router>
          <App />
        </Router>
      </MockedProvider>
    );
    expect(container).toMatchSnapshot();
  });

  test('it should render mobile version App component', () => {
    useIsMobile.mockImplementation(() => true);
    const { container } = render(
      <MockedProvider>
        <Router>
          <App />
        </Router>
      </MockedProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
