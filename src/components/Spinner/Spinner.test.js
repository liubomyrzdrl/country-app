import React from 'react';
import { render } from '@testing-library/react';
import { Spinner } from './Spinner';

describe('Test Spinner component', () => {
  it('should render Spinner component by class', () => {
    const { container } = render(
      <Spinner />
    );
    expect(container.getElementsByClassName('spinner')[0]).toBeInTheDocument();
  });
});
