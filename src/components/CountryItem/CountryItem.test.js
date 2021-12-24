import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import { CountryItem } from './CountryItem';

describe('Test CountryItem component', () => {
  it('should render CountryItem component by class & by props className "test-country-item"', () => {
    const { container } = render(
      <MockedProvider>
        <CountryItem title="testTitle" value="testValue" className="test-country-item" />
      </MockedProvider>

    );
    expect(screen.getByText('testTitle')).toBeInTheDocument();
    expect(screen.getByText('testValue')).toBeInTheDocument();
    expect(container.getElementsByClassName('country-item')[0]).toBeInTheDocument();
    expect(container.getElementsByClassName('test-country-item')[0]).toBeInTheDocument();
  });
});
