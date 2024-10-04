import React from 'react';
import { render, screen } from '@testing-library/react';
import LoadingSpinner from '..';

test('renders loading spinner', () => {
  render(<LoadingSpinner />);
  
  // Check that the spinner is displayed
  expect(screen.getByRole('status')).toBeInTheDocument();
});
