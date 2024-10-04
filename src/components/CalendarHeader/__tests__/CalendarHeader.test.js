import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CalendarHeader from '..';
import { format } from 'date-fns';

describe('CalendarHeader Component', () => {
  const currentMonth = new Date();
  const onPrevMonth = jest.fn();
  const onNextMonth = jest.fn();
  const onTodayClick = jest.fn();

  test('renders current month and year', () => {
    render(<CalendarHeader currentMonth={currentMonth} onPrevMonth={onPrevMonth} onNextMonth={onNextMonth} onTodayClick={onTodayClick} />);

    const monthText = format(currentMonth, 'MMMM yyyy');
    expect(screen.getByText(monthText)).toBeInTheDocument();
  });

  test('calls onPrevMonth when previous button is clicked', () => {
    render(<CalendarHeader currentMonth={currentMonth} onPrevMonth={onPrevMonth} onNextMonth={onNextMonth} onTodayClick={onTodayClick} />);

    fireEvent.click(screen.getByLabelText(/previous month/i));
    expect(onPrevMonth).toHaveBeenCalledTimes(1);
  });

  test('calls onNextMonth when next button is clicked', () => {
    render(<CalendarHeader currentMonth={currentMonth} onPrevMonth={onPrevMonth} onNextMonth={onNextMonth} onTodayClick={onTodayClick} />);

    fireEvent.click(screen.getByLabelText(/next month/i));
    expect(onNextMonth).toHaveBeenCalledTimes(1);
  });

  test('calls onTodayClick when today button is clicked', () => {
    render(<CalendarHeader currentMonth={currentMonth} onPrevMonth={onPrevMonth} onNextMonth={onNextMonth} onTodayClick={onTodayClick} />);

    fireEvent.click(screen.getByText(/today/i));
    expect(onTodayClick).toHaveBeenCalledTimes(1);
  });
});
