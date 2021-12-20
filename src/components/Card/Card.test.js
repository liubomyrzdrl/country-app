/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Test Card', () => {
  it('should render Card component without error', () => {
    render(<Card />);
  });

  it('should render Card component element by class "card"', () => {
    const { container } = render(<Card />);
    expect(container.getElementsByClassName('card')[0]).toBeInTheDocument();
  });

  it('should render Card component element by text child "Test"', () => {
    render(<Card>Test</Card>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('should render Card component element by props className - "card-mobile"', () => {
    const { container } = render(<Card className="card-mobile" />);
    expect(container.getElementsByClassName('card-mobile')[0]).toBeInTheDocument();
  });
});
