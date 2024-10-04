// src/App.js
import React, { useState, useEffect } from 'react';
import { addMonths, subMonths, format, isValid } from 'date-fns';
import { useParams, useNavigate } from 'react-router-dom';
import CalendarHeader from './components/CalendarHeader';
import Calendar from './components/Calendar';
import EventModal from './components/EventModal';
import LoadingSpinner from './components/LoadingSpinner'; // Import the spinner component
import { fetchEvents } from './utils/api';

import './App.css';

function App() {
  const { year, month } = useParams(); // Get year and month from URL params
  const navigate = useNavigate(); // React Router v6 navigate function
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state

  // Helper to check if the provided year and month are valid
  const isValidYearMonth = (year, month) => {
    const parsedYear = parseInt(year, 10);
    const parsedMonth = parseInt(month, 10) - 1; // Months are 0-based in JavaScript Date
    const date = new Date(parsedYear, parsedMonth);
    
    return parsedYear > 0 && parsedMonth >= 0 && parsedMonth <= 11 && isValid(date); // Ensure month is between 0 and 11 and date is valid
  };

  // Handle invalid year/month in URL
  useEffect(() => {
    const initialYear = parseInt(year, 10);
    const initialMonth = parseInt(month, 10) - 1; // Convert to 0-based month index

    // If the date is invalid, redirect to the current date
    if (!isValidYearMonth(year, month)) {
      navigate(`/${format(new Date(), 'yyyy/MM')}`); // Redirect to current date if invalid
    } else {
      // If valid, set the current month
      setCurrentMonth(new Date(initialYear, initialMonth));
    }
  }, [year, month, navigate]);

  // Fetch events whenever the current month changes
  useEffect(() => {
    setLoading(true); // Show the loading spinner when data is being fetched
    fetchEvents().then(data => {
      setEvents(data);
      setLoading(false); // Hide the loading spinner after data is fetched
    });
  }, []);

  const handlePrevMonth = () => {
    const prevMonth = subMonths(currentMonth, 1);
    navigate(`/${format(prevMonth, 'yyyy/MM')}`); // Navigate to previous month
    setCurrentMonth(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = addMonths(currentMonth, 1);
    navigate(`/${format(nextMonth, 'yyyy/MM')}`); // Navigate to next month
    setCurrentMonth(nextMonth);
  };

  const handleTodayClick = () => {
    const today = new Date();
    navigate(`/${format(today, 'yyyy/MM')}`); // Navigate to current date
    setCurrentMonth(today);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="app">
      {loading && <LoadingSpinner />} {/* Display the loading spinner */}
      
      <CalendarHeader 
        currentMonth={currentMonth} 
        onPrevMonth={handlePrevMonth} 
        onNextMonth={handleNextMonth} 
        onTodayClick={handleTodayClick}
      />
      
      <Calendar 
        currentMonth={currentMonth} 
        events={events} 
        onEventClick={handleEventClick} 
      />
      
      <EventModal event={selectedEvent} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
