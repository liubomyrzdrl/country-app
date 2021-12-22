/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChosenCountryMobile } from './ChosenCountryMobile';

const mockData = {
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
};

describe('Test ChosenCountryDesktop', () => {
  it('should render ChosenCountryMobile element by class "chosen-country-mob"', () => {
    const { container } = render(
      <MockedProvider>
        <Router>
          <ChosenCountryMobile data={mockData} />
        </Router>
      </MockedProvider>
    );
    expect(container.getElementsByClassName('chosen-country-mob')[0]).toBeInTheDocument();
  });

  it('should render ChosenCountryMobile element by class "chosen-country-mob__block"', () => {
    const { container } = render(
      <MockedProvider>
        <Router>
          <ChosenCountryMobile data={mockData} />
        </Router>
      </MockedProvider>
    );
    expect(container.getElementsByClassName('chosen-country-mob__block')[0]).toBeInTheDocument();
  });

  it('should render ChosenCountryMobile element by class "chosen-country-mob__content"', () => {
    const { container } = render(
      <MockedProvider>
        <Router>
          <ChosenCountryMobile data={mockData} />
        </Router>
      </MockedProvider>
    );
    expect(container.getElementsByClassName('chosen-country-mob__content')[0]).toBeInTheDocument();
  });

  it('should render ChosenCountryMobile element by class "chosen-country-mob__content-data"', () => {
    const { container } = render(
      <MockedProvider>
        <Router>
          <ChosenCountryMobile data={mockData} />
        </Router>
      </MockedProvider>
    );
    expect(container.getElementsByClassName('chosen-country-mob__content-data')[0]).toBeInTheDocument();
  });

  it('should render ChosenCountryMobile element by class "chosen-country-mob__name"', () => {
    const { container } = render(
      <MockedProvider>
        <Router>
          <ChosenCountryMobile data={mockData} />
        </Router>
      </MockedProvider>
    );
    expect(container.getElementsByClassName('chosen-country-mob__currency')[0]).toBeInTheDocument();
  });

  it('should render ChosenCountryMobile element by class "chosen-country-mob__currency"', () => {
    const { container } = render(
      <MockedProvider>
        <Router>
          <ChosenCountryMobile data={mockData} />
        </Router>
      </MockedProvider>
    );
    expect(container.getElementsByClassName('chosen-country-mob__currency')[0]).toBeInTheDocument();
  });

  it('should render ChosenCountryMobile element by class "chosen-country-mob__lang"', () => {
    const { container } = render(
      <MockedProvider>
        <Router>
          <ChosenCountryMobile data={mockData} />
        </Router>
      </MockedProvider>
    );
    expect(container.getElementsByClassName('chosen-country-mob__lang')[0]).toBeInTheDocument();
  });

  it('should render ChosenCountryMobile element by class "chosen-country-mob__call-code"', () => {
    const { container } = render(
      <MockedProvider>
        <Router>
          <ChosenCountryMobile data={mockData} />
        </Router>
      </MockedProvider>
    );
    expect(container.getElementsByClassName('chosen-country-mob__call-code')[0]).toBeInTheDocument();
  });
});
