import axios from 'axios';
import { fetchEvents } from '../api';

jest.mock('axios');

describe('fetchEvents', () => {
	beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});  // Suppress console.error
  });

  afterEach(() => {
    console.error.mockRestore();  // Restore console.error after tests
  });
	
  const mockEventsApiResponse = [
    {
      id: '1',
      title: 'Gran Turismo 7',
      summary: 'Gran Turismo 7 description',
      launchDate: '2024-09-13T09:01:30.152Z',
      imageFilenameThumb: 'gran-turismo-7__1x1',
      imageFilenameFull: 'gran-turismo-7__full',
      learnMoreLink: 'https://www.example.com/gran-turismo-7',
      purchaseLink: 'https://www.example.com/gran-turismo-7-buy',
    },
  ];

  const expectedEvents = [
    {
      id: '1',
      title: 'Gran Turismo 7',
      description: 'Gran Turismo 7 description',
      date: '2024-09-13T09:01:30.152Z',
      imageThumb: 'gran-turismo-7__1x1',
      imageFull: 'gran-turismo-7__full',
      learnMoreLink: 'https://www.example.com/gran-turismo-7',
      purchaseLink: 'https://www.example.com/gran-turismo-7-buy',
    },
  ];

  test('fetches events successfully from API', async () => {
    // Mock the axios.get response with the mockEventsApiResponse structure
    axios.get.mockResolvedValueOnce({ data: mockEventsApiResponse });

    const events = await fetchEvents();

    // Ensure the events match the expected structure after processing
    expect(events).toEqual(expectedEvents);
  });

  test('handles API errors gracefully', async () => {
    axios.get.mockRejectedValueOnce(new Error('API error'));

    const events = await fetchEvents();

    // Ensure that in case of an API error, an empty array is returned
    expect(events).toEqual([]);
  });
});
