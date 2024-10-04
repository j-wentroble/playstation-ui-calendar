// src/components/EventModal/index.jsx
import React from 'react';
import './index.css';

const EventModal = ({ event, onClose }) => {
  if (!event) return null; // Don't render if no event is selected

  return (
    <div className="modal-overlay" data-testid="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <img className="event-image" src={require(`../../assets/${event.imageThumb}.webp`)} alt={event.title} />
        <h2 className="event-title">{event.title}</h2>
        <p className="event-summary">{event.summary}</p>
        <a href={event.learnMoreLink} target="_blank" rel="noopener noreferrer" className="learn-more">
          Learn More
        </a>
        <a href={event.purchaseLink} target="_blank" rel="noopener noreferrer" className="purchase-link">
          Purchase
        </a>
      </div>
    </div>
  );
};

export default EventModal;
