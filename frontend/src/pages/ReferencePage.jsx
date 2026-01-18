import React from 'react';
import '../styles/reference.css';

const ReferencePage = () => {
  return (
    <div className="reference-page">
      <h2>Recurring Income</h2>
      <p>TABLE DEBUG TEST</p>

      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Months</th>
            <th>Day / Frequency</th>
            <th>Amount (R)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Daily Income</td>
            <td>January, February, March, April, May, June, July</td>
            <td>Every Monday, Wednesday, Friday</td>
            <td>1000</td>
          </tr>
        </tbody>
      </table>

      <h2>Recurring Expenses</h2>

      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Months</th>
            <th>Day / Frequency</th>
            <th>Amount (R)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Subscriptions</td>
            <td>January – December</td>
            <td>1</td>
            <td>2800</td>
          </tr>
        </tbody>
      </table>

      <h2>Source Income</h2>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Income Name</th>
            <th>Amount (R)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2025-05-16</td>
            <td>Weekday income</td>
            <td>1600</td>
          </tr>
          <tr>
            <td>2025-05-17</td>
            <td>General income</td>
            <td>15000</td>
          </tr>
        </tbody>
      </table>

      <h2>Source Expenses</h2>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Expense Name</th>
            <th>Amount (R)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2025-05-17</td>
            <td>Clothes</td>
            <td>11661</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ReferencePage;
