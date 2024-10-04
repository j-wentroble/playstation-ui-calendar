// src/components/CalendarHeader.js
import React from "react";
import { format } from "date-fns";

const CalendarHeader = ({ currentMonth, onPrevMonth, onNextMonth }) => {
  return (
    <div className="calendar-header">
      <button onClick={onPrevMonth}>Previous</button>
      <h2>{format(currentMonth, "MMMM yyyy")}</h2>
      <button onClick={onNextMonth}>Next</button>
    </div>
  );
};

export default CalendarHeader;
