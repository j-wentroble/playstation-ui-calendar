// src/components/CalendarHeader.js
import React from 'react';
import { format } from 'date-fns';

const CalendarHeader = ({ currentMonth, onPrevMonth, onNextMonth }) => {
  return (
    <div className="calendar-header">
      <button className="icon-button" onClick={onPrevMonth} aria-label="Previous Month">
        {/* SVG for previous arrow */}
        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 6l-6 6 6 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <span className="current-month">
        {format(currentMonth, 'MMMM yyyy')}
      </span>

      <button className="icon-button" onClick={onNextMonth} aria-label="Next Month">
        {/* SVG for next arrow */}
        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 6l6 6-6 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};

export default CalendarHeader;
