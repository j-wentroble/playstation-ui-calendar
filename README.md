
# PlayStation Calendar App

A React application that displays upcoming PlayStation game events in a calendar format. The app fetches data from an external API and provides detailed information for each event, such as the title, description, and links to learn more or purchase the game. The calendar allows users to view events by month and interact with event modals for more information.

## Features

- **Dynamic Event Display**: View PlayStation game events in a calendar format.
- **Event Modals**: Click on events to view more details like event description and links.
- **Responsive Design**: Adjusts to various screen sizes.
- **Error Handling**: Gracefully handles API errors and invalid event data.
- **Unit Testing**: Well-tested with `@testing-library/react` and Jest to ensure robust functionality.

## Tech Stack

- **Frontend**: React, TypeScript, CSS Modules
- **State Management**: React Hooks
- **API**: Axios for fetching data from the backend
- **Testing**: Jest, React Testing Library
- **Build Tool**: Webpack (with Create React App configuration)

## Installation

To get started with the project locally, follow the steps below:

1. Clone the repository:

   ```bash
   git clone https://github.com/j-wentroble/playstation-ui-calendar.git
   ```

2. Navigate to the project directory:

   ```bash
   cd playstation-ui-calendar
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Run tests:

   ```bash
   npm test
   ```

6. Build for production:

   ```bash
   npm run build
   ```

## Folder Structure

The project structure is organized as follows:

```
src/
│
├── components/
│   ├── CalendarHeader/
│   │   ├── index.tsx
│   │   └── CalendarHeader.test.tsx
│   ├── EventModal/
│   │   ├── index.tsx
│   └── └── EventModal.test.tsx
│   
│
├── utils/
│   ├── api.ts
│   └── api.test.ts
│
├── index.tsx
└── App.tsx
```

## Testing

The project includes comprehensive unit tests using `@testing-library/react` and Jest. These tests ensure the components work correctly and handle various scenarios, such as:

- Rendering the calendar and events
- Displaying event modals
- Handling API errors gracefully
- Validating dates and data before rendering events

To run the tests:

```bash
npm test
```

## API

The app fetches PlayStation events from a mock API using Axios. Each event contains the following properties:

- `id`: Unique identifier for the event
- `title`: Title of the event (game)
- `summary`: Short description of the event
- `launchDate`: The date when the event is happening
- `imageThumb`: URL of the event's thumbnail image
- `learnMoreLink`: External link for more details about the game
- `purchaseLink`: External link to purchase the game

## Contributions

Contributions are welcome! If you find any bugs or want to add new features, please feel free to create a pull request.

1. Fork the repository
2. Create a new branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a pull request
