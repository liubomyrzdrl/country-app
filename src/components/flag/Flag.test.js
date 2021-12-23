import React from 'react';
import { render, screen } from '@testing-library/react';
import { Flag } from './Flag';

describe('Test Flag component', () => {
  it('should render Flag component', () => {
    render(
      <Flag name="Ukraine" code="UA" />
    );
    expect(screen.getByAltText('Ukraine')).toBeInTheDocument();
  });

  it('should render Flag component by class flag-img & by props isMobile & props isGreetingCountry', () => {
    const { container } = render(
      <Flag name="Ukraine" code="UA" isMobile isGreetingCountry />
    );
    expect(container.getElementsByClassName('flag-img')[0]).toBeInTheDocument();
    expect(container.getElementsByClassName('flag-img_mobile')[0]).toBeInTheDocument();
    expect(container.getElementsByClassName('flag-img_greeting-country')[0]).toBeInTheDocument();
  });
});
