const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;

  // Performing the division
  const resultValue = dividend / divider;
  
  // Display the result without decimal 
  result.innerText = Math.floor(resultValue);

  // Checking if both inputs are empty or missing
  if(!dividend || !divider){
    result.innerText = `Division not performed. Both values are required in inputs. Try again`;
    return;
  };
});