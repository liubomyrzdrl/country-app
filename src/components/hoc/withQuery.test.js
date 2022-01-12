import React from 'react';
import { useParams } from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';
import { gql } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import { WithQuery } from './withQuery';
import { COUNTRIES__QUERY } from '../countries/Countries';

jest.mock('react-router-dom', () => ({
  useParams: jest.fn().mockReturnValue(),
}));

export const MOCK__ERROR__QUERY = gql`
query getCountriesTest {
  countries {
    test
  }
}
`;

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

const mockError = [{
  request: {
    query: COUNTRIES__QUERY,
  },
  error: new Error('An error occurred'),
},
];

describe('Test WithQuery', () => {
  afterEach(cleanup);
  it('should render component Loader', () => {
    useParams.mockImplementation(() => ({
      code: 'AD',
    }));

    const MockWithQuery = WithQuery(<div />, COUNTRIES__QUERY);
    const { container } = render(
      <MockedProvider mocks={mockData}>
        <MockWithQuery />
      </MockedProvider>
    );
    expect(container.getElementsByClassName('spinner')[0]).toBeInTheDocument();
  });

  it('should render component Error', async () => {
    useParams.mockImplementation(() => ({}));

    const MockWithQuery = WithQuery(<div />, MOCK__ERROR__QUERY);
    const { container } = render(
      <MockedProvider mocks={mockError}>
        <MockWithQuery />
      </MockedProvider>
    );

    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(container.getElementsByClassName('error-msg')[0]).toBeInTheDocument();
  });
});
