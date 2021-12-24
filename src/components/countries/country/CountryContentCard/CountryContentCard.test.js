/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import React from 'react';
import { CountryCardContent } from './CountryCardContent';

describe('Test CountryCardContent component', () => {
  it('should render CountryCardContent element by class', () => {
    const { container } = render(<CountryCardContent name="Ukrane" capital="Kiev" continent={{ name: 'Europe' }} />);
    expect(screen.getByText('Ukrane')).toBeInTheDocument();
    expect(screen.getByText('Kiev')).toBeInTheDocument();
    expect(screen.getByText('Europe')).toBeInTheDocument();
    expect(container.getElementsByClassName('country-card-content')[0]).toBeInTheDocument();
    expect(container.getElementsByClassName('country-card-content__country-block')[0]).toBeInTheDocument();
    expect(container.getElementsByClassName('country-card-content__region-block')[0]).toBeInTheDocument();
    expect(container.getElementsByClassName('country-card-content__capital-block')[0]).toBeInTheDocument();
    expect(container.getElementsByClassName('country-card-content__title')[0]).toBeInTheDocument();
    expect(container.getElementsByClassName('country-card-content__name')[0]).toBeInTheDocument();
    expect(container.getElementsByClassName('country-card-content__title')[0]).toBeInTheDocument();
    expect(container.getElementsByClassName('country-card-content__continent')[0]).toBeInTheDocument();
  });
});
