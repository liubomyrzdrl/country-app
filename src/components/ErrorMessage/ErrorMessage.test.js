import React from 'react';
import { render } from '@testing-library/react';
import { ErrorMessage } from './ErrorMessage';

describe('Test ErrorMessage component', () => {
  it('should render ErrorMessage component by class', () => {
    const { container } = render(
      <ErrorMessage />
    );
    expect(container.getElementsByClassName('error-msg')[0]).toBeInTheDocument();
  });
});
