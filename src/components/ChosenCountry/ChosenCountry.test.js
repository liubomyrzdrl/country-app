import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useIsMobile } from '../hooks/useIsMobile';
import { ChosenCountry, COUNTRY__QUERY } from './ChosenCountry';

const mockData = [{
  request: {
    query: COUNTRY__QUERY,
    variables: {},
  },
  result: {
    data: {
      country: {
        capital: 'Andorra la Vella',
        code: 'AD',
        continent: { name: 'Europe', __typename: 'Continent' },
        currency: 'EUR,UA,RUS',
        languages: [
          { name: 'Catalan' },
        ],
        name: 'Catalan',
        phone: '376',
      },
    },
  },
}];

jest.mock('../hooks/useIsMobile.js', () => ({
  useIsMobile: jest.fn(),
}));

describe('Test ChosenCountry component', () => {
  test('it should render desktop version ChosenCountry component', async () => {
    useIsMobile.mockImplementation(() => false);
    const { container } = render(
      <MockedProvider mocks={mockData}>
        <ChosenCountry />
      </MockedProvider>
    );

    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(container.getElementsByClassName('chosen-country')[0]).toBeInTheDocument();
  });

  test('it should render mobile version ChosenCountry component', async () => {
    useIsMobile.mockImplementation(() => true);
    const { container } = render(
      <MockedProvider mocks={mockData}>
        <Router>
          <ChosenCountry />
        </Router>
      </MockedProvider>
    );

    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(container.getElementsByClassName('chosen-country-mob__block')[0]).toBeInTheDocument();
  });
});
