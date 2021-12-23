import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Countries, COUNTRIES__QUERY } from './Countries';

const mockData = [
  {
    request: {
      query: COUNTRIES__QUERY,
    },
    result: {
      data: {
        countries: [
          {
            capital: 'Andorra la Vella',
            code: 'AD',
            continent: { name: 'Europe', __typename: 'Continent' },
            currency: 'EUR,UA,RUS',
            languages: [{ name: 'Catalan' }],
            name: 'Catalan',
            phone: '376',
          },
          {
            capital: 'Ukraine',
            code: 'ua',
            continent: { name: 'Europe', __typename: 'Continent' },
            currency: 'UA',
            languages: [{ name: 'Ukrainien' }],
            name: 'Kiev',
            phone: '000',
          },
        ],
      },
    },
  },
];

const mockDataEmpty = [
  {
    request: {
      query: COUNTRIES__QUERY,
    },
    result: {
      data: {
        countries: [],
      },
    },
  },
];

describe('Test Countries component', () => {
  test('it should render  Countries component', async () => {
    const { container } = render(
      <MockedProvider mocks={mockData}>
        <Router>
          <Countries />
        </Router>
      </MockedProvider>
    );

    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(
      container.getElementsByClassName('countries')[0]
    ).toBeInTheDocument();

    expect(
      container.getElementsByClassName('countries__block')[0]
    ).toBeInTheDocument();
  });

  test('it should  Countries component to render 2 items', async () => {
    const { container } = render(
      <MockedProvider mocks={mockData}>
        <Router>
          <Countries />
        </Router>
      </MockedProvider>
    );

    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(
      container.getElementsByClassName('countries__block')[0].children.length
    ).toEqual(2);
  });

  test('it should not render Countries component content id data countries  is empty', async () => {
    const { container } = render(
      <MockedProvider mocks={mockDataEmpty}>
        <Router>
          <Countries />
        </Router>
      </MockedProvider>
    );

    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(
      container.getElementsByClassName('countries__block')[0]
    ).toBeEmptyDOMElement();
  });
});
