// Import React
import React from 'react';

// Import dashboard-specific styles
import './HomePage.css';

// Import reference data (our "Excel sheets")
import {
  recurringIncome,
  recurringExpenses,
  sourceIncome,
  sourceExpenses,
} from '../data/referenceData';

// Import calculation utility
import { calculateTotalAmount } from '../utils/calculations';

// HomePage is the dashboard view
function HomePage() {
  // ===============================
  // CALCULATE TOTALS
  // ===============================

  // Total actual income from source transactions
  const totalIncome = calculateTotalAmount(sourceIncome);

  // Total actual expenses from source transactions
  const totalExpenses = calculateTotalAmount(sourceExpenses);

  // Current balance = income - expenses
  const currentBalance = totalIncome - totalExpenses;

  // Projected income (from recurring income rules)
  const projectedIncome = calculateTotalAmount(recurringIncome);

  // Projected expenses (from recurring expense rules)
  const projectedExpenses = calculateTotalAmount(recurringExpenses);

  // Projected balance = projected income - projected expenses
  const projectedBalance = projectedIncome - projectedExpenses;

  return (
    <div>
      {/* Dashboard title */}
      <h1>Dashboard</h1>

      {/* Summary cards container */}
      <div className="dashboard-cards">
        {/* CURRENT BALANCE */}
        <div className="card balance">
          <h3>Current Balance</h3>
          <p>R {currentBalance}</p>
        </div>

        {/* TOTAL INCOME */}
        <div className="card income">
          <h3>Total Income</h3>
          <p>R {totalIncome}</p>
        </div>

        {/* TOTAL EXPENSES */}
        <div className="card expense">
          <h3>Total Expenses</h3>
          <p>R {totalExpenses}</p>
        </div>

        {/* PROJECTED BALANCE */}
        <div className="card projected">
          <h3>Projected Balance</h3>
          <p>R {projectedBalance}</p>
        </div>
      </div>
    </div>
  );
}

// Export HomePage
export default HomePage;
