// Initialize the ATM with available denominations
const atm = {
  2000: 10,
  500: 20,
  200: 50,
  100: 100,
};

// Function to display available denominations
function displayAvailableDenominations() {
  console.log("Available denominations in the ATM:");
  for (const denomination in atm) {
    console.log(`${denomination} - ${atm[denomination]} notes`);
  }
}

// Function to deposit money
function deposit(denomination, count) {
  if (atm[denomination]) {
    atm[denomination] += count;
    console.log(`Deposited ${count} ${denomination} notes successfully.`);
  } else {
    console.log("Invalid denomination. Deposit failed.");
  }
}

// Function to withdraw money
function withdraw(amount) {
  const withdrawal = {};
  const denominations = [2000, 500, 200, 100];

  for (const denom of denominations) {
    const numNotes = Math.floor(amount / denom);
    if (atm[denom] >= numNotes) {
      withdrawal[denom] = numNotes;
      amount -= denom * numNotes;
      atm[denom] -= numNotes;
    }
  }

  if (amount === 0) {
    console.log("Withdrawal successful. Dispensed notes:");
    for (const denomination in withdrawal) {
      console.log(`${denomination} - ${withdrawal[denomination]} notes`);
    }
  } else {
    console.log("Withdrawal failed. Insufficient denominations.");
  }
}

// Example usage:
displayAvailableDenominations();
deposit(500, 4);
withdraw(2000);
