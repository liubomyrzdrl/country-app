/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import { render } from '@testing-library/react';
import React from 'react';
import { GreetingCountryDesktop } from './GreetingCountryDesktop';

describe('Test GreetingCountryDesktop component', () => {
  it('should render GreetingCountryDesktop element by class', () => {
    const { container } = render(<GreetingCountryDesktop />);
    expect(container.getElementsByClassName('greeting-country')[0]).toBeInTheDocument();
    expect(container.getElementsByClassName('greeting-country__flag')[0]).toBeInTheDocument();
  });
});
