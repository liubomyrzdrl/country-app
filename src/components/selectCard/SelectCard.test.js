/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { SelectCard } from './SelectCard';
import { mockData } from '../countries/Countries.test';
import { useIsMobile } from '../hooks/useIsMobile';

jest.mock('../hooks/useIsMobile.js', () => ({
  useIsMobile: jest.fn(),
}));

describe('Test SelectCard component', () => {
  it('should render SelectCard element by class', async () => {
    useIsMobile.mockImplementation(() => true);
    const { container } = render(
      <MockedProvider mocks={mockData}>
        <Router>
          <SelectCard />
        </Router>
      </MockedProvider>
    );
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(container.getElementsByClassName('select-card')[0]).toBeInTheDocument();
    expect(container.getElementsByClassName('select-card__title')[0]).toBeInTheDocument();
    expect(container.getElementsByClassName('select-card__icon')[0]).toBeInTheDocument();
  });
});
