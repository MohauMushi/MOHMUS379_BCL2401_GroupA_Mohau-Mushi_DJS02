const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;


  // Performing the division
const decimalRemoveValue = dividend / divider;

// Checking if both inputs are empty or missing
if (!dividend || !divider) {
  result.innerText = `Division not performed. Both values are required in inputs. Try again`;
} else if (isNaN(dividend) || isNaN(divider)) {// Checking if both inputs are numbers
  // Crashing the program
  document.body.classList.add(`critical-error`);
  document.body.innerText = `Something critical went wrong. Please reload the page`;
  console.error(`Invalid inputs`, new Error(`Invalid input`));
} else if (divider === '0') { // Checking for the invalid divisions
  result.classList.add(`error-message`);
  result.innerText = `Division not performed. Invalid number provided. Try again`;
  console.error(`Invalid devision`, new Error(`Division by Zero`));
} else {
  // Display the result without decimal
  result.innerText = Math.floor(decimalRemoveValue);
}

  
});