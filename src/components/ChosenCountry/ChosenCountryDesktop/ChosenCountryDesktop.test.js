/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChosenCountryDesktop } from './ChosenCountryDesktop';

const mockData = {
  country: {
    capital: 'Andorra la Vella',
    code: 'AD',
    continent: { name: 'Europe', __typename: 'Continent' },
    name: 'Andorra',
  },
};

describe('Test ChosenCountryDesktop', () => {
  it('should render ChosenCountryDesktop element by class "chosen-country"', () => {
    const { container } = render(
      <MockedProvider>
        <Router>
          <ChosenCountryDesktop data={mockData} />
        </Router>
      </MockedProvider>
    );
    expect(container.getElementsByClassName('chosen-country')[0]).toBeInTheDocument();
  });

  it('should render ChosenCountryDesktop element by class "chosen-country__center"', () => {
    const { container } = render(
      <MockedProvider>
        <Router>
          <ChosenCountryDesktop data={mockData} />
        </Router>
      </MockedProvider>
    );
    expect(container.getElementsByClassName('chosen-country__center')[0]).toBeInTheDocument();
  });

  it('should render ChosenCountryDesktop element by class "chosen-country__left"', () => {
    const { container } = render(
      <MockedProvider>
        <Router>
          <ChosenCountryDesktop data={mockData} />
        </Router>
      </MockedProvider>
    );
    expect(container.getElementsByClassName('chosen-country__right')[0]).toBeInTheDocument();
  });

  it('should render ChosenCountryDesktop element by class "chosen-country__right"', () => {
    const { container } = render(
      <MockedProvider>
        <Router>
          <ChosenCountryDesktop data={mockData} />
        </Router>
      </MockedProvider>
    );
    expect(container.getElementsByClassName('chosen-country__right')[0]).toBeInTheDocument();
  });

  it('should render ChosenCountryDesktop element by class "chosen-country__name"', () => {
    const { container } = render(
      <MockedProvider>
        <Router>
          <ChosenCountryDesktop data={mockData} />
        </Router>
      </MockedProvider>
    );
    expect(container.getElementsByClassName('chosen-country__name')[0]).toBeInTheDocument();
  });

  it('should render ChosenCountryDesktop element by class "chosen-country__currency"', () => {
    const { container } = render(
      <MockedProvider>
        <Router>
          <ChosenCountryDesktop data={mockData} />
        </Router>
      </MockedProvider>
    );
    expect(container.getElementsByClassName('chosen-country__currency')[0]).toBeInTheDocument();
  });

  it('should render ChosenCountryDesktop element by class "chosen-country__capital"', () => {
    const { container } = render(
      <MockedProvider>
        <Router>
          <ChosenCountryDesktop data={mockData} />
        </Router>
      </MockedProvider>
    );
    expect(container.getElementsByClassName('chosen-country__capital')[0]).toBeInTheDocument();
  });

  it('should render ChosenCountryDesktop element by class "chosen-country__calling-codes"', () => {
    const { container } = render(
      <MockedProvider>
        <Router>
          <ChosenCountryDesktop data={mockData} />
        </Router>
      </MockedProvider>
    );
    expect(container.getElementsByClassName('chosen-country__calling-codes')[0]).toBeInTheDocument();
  });
});
