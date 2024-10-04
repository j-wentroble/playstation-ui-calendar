import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EventModal from '..';

const mockEvent = {
  id: '1',
  title: 'Gran Turismo 7',
  summary: 'Gran Turismo 7 description',
  imageThumb: 'gran-turismo-7__1x1',
  learnMoreLink: 'https://www.example.com/gran-turismo-7',
  purchaseLink: 'https://www.example.com/gran-turismo-7-buy',
};

describe('EventModal Component', () => {
  const onClose = jest.fn();

  test('renders event details correctly', () => {
    render(<EventModal event={mockEvent} onClose={onClose} />);

    // Be more specific with getByText by targeting heading and summary
    expect(screen.getByRole('heading', { name: /gran turismo 7/i })).toBeInTheDocument(); // Targeting h2
    expect(screen.getByText(/gran turismo 7 description/i)).toBeInTheDocument(); // Targeting description text
  });

  test('calls onClose when close button is clicked', () => {
    render(<EventModal event={mockEvent} onClose={onClose} />);
    
    fireEvent.click(screen.getByText('X')); // Close button
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('calls onClose when overlay is clicked', () => {
    render(<EventModal event={mockEvent} onClose={onClose} />);

    // If the modal overlay does not have a `role="dialog"`, use another selector, like `modal-overlay` class
    fireEvent.click(screen.getByTestId('modal-overlay')); // Clicking the overlay
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
