// =====================
// RECURRING INCOME DATA
// =====================

// Each object represents ONE ROW in your recurring income table
export const recurringIncome = [
  {
    // Description of the income
    description: 'Daily Income',

    // Months when this income applies
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'Octctober',
      'November',
      'December',
    ],

    // Frequency information (days of week)
    frequency: ',Every day,Every Monday, Wednesday, Friday',

    // Amount received per occurrence
    amount: 1000,
  },
];

// =======================
// RECURRING EXPENSE DATA
// =======================

export const recurringExpenses = [
  {
    description: 'Subscriptions',
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'Octctober',
      'November',
      'December',
    ],
    day: 1,
    amount: 2800,
  },
];

// =====================
// SOURCE INCOME (REAL TRANSACTIONS)
// =====================

export const sourceIncome = [
  {
    date: '2025-05-16',
    name: 'Weekday income',
    amount: 1600,
  },
  {
    date: '2025-05-17',
    name: 'General income',
    amount: 15000,
  },
];

// =====================
// SOURCE EXPENSES
// =====================

export const sourceExpenses = [
  {
    date: '2025-05-17',
    name: 'Clothes',
    amount: 11661,
  },
  {
    date: '2025-05-18',
    name: 'Glasses',
    amount: 2727,
  },
];
