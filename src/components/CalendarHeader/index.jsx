// src/components/CalendarHeader
import React from 'react';
import { format } from 'date-fns';

const CalendarHeader = ({ currentMonth, onPrevMonth, onNextMonth, onTodayClick }) => {
  return (
    <div className="calendar-header">
      <div className="calendar-controls">
        <button className="icon-button" onClick={onPrevMonth} aria-label="Previous Month">
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 6l-6 6 6 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <span className="current-month">
          {format(currentMonth, 'MMMM yyyy')}
        </span>

        <button className="icon-button" onClick={onNextMonth} aria-label="Next Month">
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6l6 6-6 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <button className="today-button" onClick={onTodayClick}>
        Today
      </button>
    </div>
  );
};

export default CalendarHeader;
