import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { useIsMobile } from '../hooks/useIsMobile';
import { ChosenCountry } from './ChosenCountry';

const mocks = [];
jest.mock('../hooks/useIsMobile.js', () => ({
  useIsMobile: jest.fn(),
}));

describe('Test ChosenCountry component', () => {
  test('it should render desktop version ChosenCountry component', () => {
    useIsMobile.mockImplementation(() => false);
    const { container } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ChosenCountry />
      </MockedProvider>
    );
    expect(container).toMatchSnapshot();
  });

  test('it should render mobile version ChosenCountry component', () => {
    useIsMobile.mockImplementation(() => true);
    const { container } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ChosenCountry />
      </MockedProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
