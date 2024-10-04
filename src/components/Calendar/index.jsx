// src/components/Calendar.js
import React from 'react';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, format } from 'date-fns';
import CalendarEvent from '../CalendarEvent';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Calendar = ({ currentMonth, events, onEventClick }) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const weekStart = startOfWeek(monthStart);
  const weekEnd = endOfWeek(monthEnd);

  // Get all the days from the start of the first week to the end of the last week
  const days = eachDayOfInterval({ start: weekStart, end: weekEnd });

  // Calculate the number of rows (weeks) in the calendar (5 or 6)
  const numberOfRows = Math.ceil(days.length / 7);

  return (
    <div className="calendar-wrapper">
      {/* Weekbar */}
      <div className="weekbar">
        {daysOfWeek.map((day, idx) => (
          <div key={idx} className="weekbar-day">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="calendar-container" style={{ gridTemplateRows: `repeat(${numberOfRows}, 1fr)` }}>
        {days.map((day, idx) => {
          const isCurrentMonth = format(day, 'M') === format(currentMonth, 'M'); // Check if the day is in the current month

          // Filter events by matching the day with the event's date
          const dayEvents = events.filter(event => format(new Date(event.date), 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd'));

          return (
            <div key={idx} className={`day-cell ${isCurrentMonth ? '' : 'disabled'}`}>
              {dayEvents.length > 0 ? (
                <CalendarEvent event={dayEvents[0]} onEventClick={onEventClick} date={day} />
              ) : (
                <span className="date-number">{format(day, 'd')}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
