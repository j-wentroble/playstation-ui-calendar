// src/components/CalendarEvent/index.jsx
import React from 'react';

const CalendarEvent = ({ event, date, onEventClick }) => {
  return (
    <div className="calendar-event" onClick={() => onEventClick(event)}>
      <img src={require(`../../assets/${event.imageThumb}.webp`)} alt={event.title} data-testid="event-thumbnail"/>
      <span className="event-date">{new Date(date).getDate()}</span>
    </div>
  );
};

export default CalendarEvent;
