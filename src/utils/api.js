// src/utils/api.js
import axios from 'axios';
import { isValid, parseISO } from 'date-fns';

export const fetchEvents = async () => {
  try {
    const response = await axios.get('https://amock.io/api/JoshuaWentr/v2/playstation-events', {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    let eventsData = response.data;

    // Check if the response is a string, and parse it as JSON if necessary
    if (typeof eventsData === 'string') {
      try {
        eventsData = JSON.parse(eventsData);
      } catch (error) {
        console.error('Failed to parse JSON string:', error);
        return []; // Return an empty array if parsing fails
      }
    }

    // Validate events and filter out those with malformed dates
    const validEvents = eventsData
      .filter(event => {
        const eventDate = parseISO(event.launchDate);
        if (!isValid(eventDate)) {
          console.warn(`Skipping event with invalid date: ${event.title}, date: ${event.launchDate}`);
          return false; // Skip this event if the date is invalid
        }
        return true; // Only include events with valid dates
      })
      .map(event => ({
        id: event.id,
        title: event.title,
        description: event.summary,
        date: event.launchDate, // We already validated this date
        imageThumb: event.imageFilenameThumb,
        imageFull: event.imageFilenameFull,
        learnMoreLink: event.learnMoreLink,
        purchaseLink: event.purchaseLink,
      }));

    return validEvents;
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
};
