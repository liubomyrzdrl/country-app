import React from 'react';
import { render, screen } from '@testing-library/react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { useIsMobile } from '../hooks/useIsMobile';

jest.mock('../hooks/useIsMobile.js', () => ({
  useIsMobile: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useParams: jest.fn().mockReturnValue(),
  useNavigate: jest.fn().mockReturnValue(),
}));

describe('Test Header', () => {
  it('should render div type of button if params code exist and props useIsmobile true', async () => {
    useIsMobile.mockImplementation(() => true);
    useParams.mockImplementation(() => ({
      code: 'AD',
    }));

    useNavigate.mockImplementation(() => ({}));
    render(
      <Header />
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render Header component by class', () => {
    useParams.mockImplementation(() => ({}));

    const { container } = render(
      <Header />
    );
    expect(container.getElementsByClassName('header')[0]).toBeInTheDocument();
    expect(container.getElementsByClassName('header__content')[0]).toBeInTheDocument();
    expect(container.getElementsByClassName('header__title')[0]).toBeInTheDocument();
  });
});
