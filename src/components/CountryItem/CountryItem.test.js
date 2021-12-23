import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render } from '@testing-library/react';
import { CountryItem } from './CountryItem';

describe('Test CountryItem component', () => {
  it('should render CountryItem component by class & by props className "test-country-item"', () => {
    const { container } = render(
      <MockedProvider>
        <CountryItem title="testTitle" value="testValue" className="test-country-item" />
      </MockedProvider>

    );
    expect(container.getElementsByClassName('country-item')[0]).toBeInTheDocument();
    expect(container.getElementsByClassName('country-item__title')[0]).toBeInTheDocument();
    expect(container.getElementsByClassName('country-item__value')[0]).toBeInTheDocument();
    expect(container.getElementsByClassName('test-country-item')[0]).toBeInTheDocument();
  });
});
