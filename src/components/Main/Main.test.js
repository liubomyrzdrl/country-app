/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Main } from './Main';
import { mockData } from '../countries/Countries.test';
import { useIsMobile } from '../hooks/useIsMobile';

jest.mock('../hooks/useIsMobile.js', () => ({
  useIsMobile: jest.fn(),
}));

describe('Test Main component', () => {
  it('should render Main element by class', async () => {
    useIsMobile.mockImplementation(() => true);
    const { container } = render(
      <MockedProvider mocks={mockData}>
        <Router>
          <Main />
        </Router>
      </MockedProvider>
    );
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(container.getElementsByClassName('main')[0]).toBeInTheDocument();
    expect(container.getElementsByClassName('main__content')[0]).toBeInTheDocument();
    expect(
      container.getElementsByClassName('countries')[0]
    ).toBeInTheDocument();

    expect(
      container.getElementsByClassName('countries__block')[0]
    ).toBeInTheDocument();
  });
});
