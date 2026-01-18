// ===============================
// FINANCIAL CALCULATION UTILITIES
// ===============================

// This function calculates the total of an array of transactions
// Each transaction must have an "amount" property
export function calculateTotalAmount(items) {
  // Start with a total of 0
  let total = 0;

  // Loop through each item in the array
  for (let i = 0; i < items.length; i++) {
    // Add the amount of the current item to the total
    total = total + items[i].amount;
  }

  // Return the final calculated total
  return total;
}
