/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Country } from './Country';

describe('Test Country component', () => {
  it('should render Country element by class', () => {
    const { container } = render(<Country />);
    expect(container.getElementsByClassName('country')[0]).toBeInTheDocument();
    expect(
      container.getElementsByClassName('country__block')[0]
    ).toBeInTheDocument();
  });

  it('should render Flag component in Country component', () => {
    render(<Country name="Ukraine" code="UA" />);
    expect(screen.getByAltText('Ukraine')).toBeInTheDocument();
  });

  it('should render CountryCardContent items in Country component and  to be equal 3', () => {
    const { container } = render(
      <Country name="Ukraine" code="UA" continent={{ name: 'Europe' }} />
    );

    expect(
      container.getElementsByClassName('country-card-content')[0]
    ).toBeInTheDocument();
    expect(
      container.getElementsByClassName('country-card-content')[0].children
        .length
    ).toEqual(3);
  });
});
