// src/components/EventModal.js
import React from 'react';

const EventModal = ({ event, onClose }) => {
  if (!event) return null;

  // Dynamically import the full-size image from the local assets folder
  const eventFullImage = require(`../../assets/${event.imageFull}.jpg`);

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{event.title}</h2>
        <img src={eventFullImage} alt={event.title} className="event-image-full" />
        <p>{event.description}</p>
        <p><a href={event.learnMoreLink} target="_blank" rel="noopener noreferrer">Learn More</a></p>
        <p><a href={event.purchaseLink} target="_blank" rel="noopener noreferrer">Buy Now</a></p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default EventModal;
