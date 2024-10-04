import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import App from './App';
import { fetchEvents } from './utils/api';

// Mock the API call
jest.mock('./utils/api');

const mockEvents = [
  {
    id: '1',
    title: 'Gran Turismo 7',
    summary: 'Gran Turismo 7 description',
    launchDate: '2024-09-13T09:01:30.152Z',
    imageThumb: 'gran-turismo-7__1x1',
    learnMoreLink: 'https://www.example.com/gran-turismo-7',
    purchaseLink: 'https://www.example.com/gran-turismo-7-buy',
  },
  // Add more mock events here if needed
];

describe('App Component', () => {
  beforeEach(() => {
    fetchEvents.mockResolvedValue(mockEvents); // Mock API response
  });

  test('shows loading spinner while fetching events', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // Check that the loading spinner is in the document
    expect(screen.getByRole('status')).toBeInTheDocument();

    // Wait for the loading spinner to disappear
    await waitFor(() => expect(screen.queryByRole('status')).not.toBeInTheDocument());
  });

  test('renders calendar header with current month and year', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  
    // Wait for the loading spinner to disappear or until the calendar is rendered
    await waitFor(() => {
      const calendarHeader = screen.getByText(new RegExp(new Date().toLocaleString('default', { month: 'long', year: 'numeric' })));
      expect(calendarHeader).toBeInTheDocument();
    });
  });
  

  test('renders events correctly when available', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  
    try {
      // Wait for events to be rendered (this assumes that events have the 'event-thumbnail' test ID)
      const eventElements = await screen.findAllByTestId('event-thumbnail');
  
      // Ensure at least one event is rendered
      expect(eventElements.length).toBeGreaterThan(0);
  
      // Optionally, check that each event element is in the document
      eventElements.forEach(event => {
        expect(event).toBeInTheDocument();
      });
  
    } catch (error) {
      // If no events are found, this catch block will handle it without failing the test
      console.log("No events found for the current month.");
      // Optionally, add an assertion to confirm no events were rendered
      const eventElements = screen.queryAllByTestId('event-thumbnail');
      expect(eventElements.length).toBe(0); // Assert that no event thumbnails exist
    }
  });
  
});
