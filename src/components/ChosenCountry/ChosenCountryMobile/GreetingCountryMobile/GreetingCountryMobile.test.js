/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import { render } from '@testing-library/react';
import React from 'react';
import { GreetingCountryMobile } from './GreetingCountryMobile';

describe('Test GreetingCountryMobile component', () => {
  it('should render GreetingCountryMobile element by class greeting-country-mobile"', () => {
    const { container } = render(<GreetingCountryMobile />);
    expect(container.getElementsByClassName('greeting-country-mobile')[0]).toBeInTheDocument();
  });

  it('should render GreetingCountryMobile component element by class "greeting-country-mobile__greet-str"', () => {
    const { container } = render(<GreetingCountryMobile />);
    expect(container.getElementsByClassName('greeting-country-mobile__greet-str')[0]).toBeInTheDocument();
  });
});
