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

  it('should render Country component with props: "name, capital, continent"', () => {
    render(<Country name="Ukraine" capital="Kiev" continent={{ name: 'Europe' }} />);
    expect(screen.getByText('Ukraine')).toBeInTheDocument();
    expect(screen.getByText('Kiev')).toBeInTheDocument();
    expect(screen.getByText('Europe')).toBeInTheDocument();
  });
});
