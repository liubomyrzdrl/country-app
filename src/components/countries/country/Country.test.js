/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import { render } from '@testing-library/react';
import React from 'react';
import { Country } from './Country';

describe('Test Country component', () => {
  it('should render Country element by class', () => {
    const { container } = render(<Country />);
    expect(container.getElementsByClassName('country')[0]).toBeInTheDocument();
    expect(container.getElementsByClassName('country__block')[0]).toBeInTheDocument();
  });
});
