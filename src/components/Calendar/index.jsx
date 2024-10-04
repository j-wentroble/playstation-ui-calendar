// src/components/Calendar
import React from 'react';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, format, isToday } from 'date-fns';
import CalendarEvent from '../CalendarEvent';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Calendar = ({ currentMonth, events, onEventClick }) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const weekStart = startOfWeek(monthStart);
  const weekEnd = endOfWeek(monthEnd);

  // Get all the days from the start of the first week to the end of the last week
  const days = eachDayOfInterval({ start: weekStart, end: weekEnd });

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
          const isCurrentDay = isToday(day); // Check if the day is today

          // Filter events by matching the day with the event's date
          const dayEvents = events.filter(event => {
            const eventDate = new Date(event.date);
            const dayDate = new Date(day);
          
            if (isNaN(eventDate.getTime()) || isNaN(dayDate.getTime())) {
              return false;  // Skip invalid dates
            }
          
            return format(eventDate, 'yyyy-MM-dd') === format(dayDate, 'yyyy-MM-dd');
          });
          

          let cellClass = 'day-cell';
          if (!isCurrentMonth) {
            cellClass += ' disabled'; // For previous/next month days
          }
          if (isCurrentDay) {
            cellClass += ' today'; // Sky color for today
          }

          return (
            <div key={idx} className={cellClass}>
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
