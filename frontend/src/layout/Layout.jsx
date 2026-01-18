// Import React so JSX works
import React from 'react';

// Import the top navigation bar
import TopNav from './TopNav';

// Layout defines the permanent structure of the app
function Layout({ children }) {
  return (
    <div>
      {/* Top navigation bar */}
      <TopNav />

      {/* Main page content */}
      <main
        style={{
          // Add space so content starts BELOW the navbar
          paddingTop: '20px',

          // Padding around the content
          paddingLeft: '30px',
          paddingRight: '30px',
        }}
      >
        {/* Render the page content here */}
        {children}
      </main>
    </div>
  );
}

// Export Layout for use in App.jsx
export default Layout;
