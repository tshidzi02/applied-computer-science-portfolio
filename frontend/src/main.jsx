// Import StrictMode from React (development helper)
import { StrictMode } from 'react';

// Import createRoot to attach React to the HTML page
import { createRoot } from 'react-dom/client';

// Import BrowserRouter
// This enables URL-based navigation
import { BrowserRouter } from 'react-router-dom';

// Import the main App component
import App from './App';

// Attach React to the div with id="root"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* BrowserRouter watches the URL and controls page changes */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
