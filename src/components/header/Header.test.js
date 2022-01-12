import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { useParams } from 'react-router-dom';
import { Header } from './Header';
import { useIsMobile } from '../hooks/useIsMobile';

jest.mock('../hooks/useIsMobile.js', () => ({
  useIsMobile: jest.fn(),
}));

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useParams: jest.fn().mockReturnValue(),
  useNavigate: () => mockNavigate,
}));

describe('Test Header', () => {
  it('should render div type of button if params code exist and props useIsmobile true & should be called func mockNavigate', async () => {
    useIsMobile.mockImplementation(() => true);
    useParams.mockImplementation(() => ({
      code: 'AD',
    }));

    render(
      <Header />
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button'));
    expect(mockNavigate).toHaveBeenCalled();
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
