import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout keeps the top nav visible
import Layout from './layout/Layout';

// Import pages
import HomePage from './pages/HomePage';
import ReferencePage from './pages/ReferencePage';
import TransactionsPage from './pages/TransactionsPage';
import MonthlyViewPage from './pages/MonthlyViewPage';
import ReportsPage from './pages/ReportsPage';

function App() {
  return (
    <Layout>
      <Routes>
        {/* Dashboard */}
        <Route path="/" element={<HomePage />} />

        {/* Reference data */}
        <Route path="/reference" element={<ReferencePage />} />

        {/* Transactions */}
        <Route path="/transactions" element={<TransactionsPage />} />

        {/* Monthly breakdown */}
        <Route path="/monthly" element={<MonthlyViewPage />} />

        {/* Reports & charts */}
        <Route path="/reports" element={<ReportsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
