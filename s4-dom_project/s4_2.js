// Listen for submit form

// user experience part make it delay bit, so change it to function
document
  .querySelector("#loan-form")
  // .addEventListener("submit", calculateResult);
  .addEventListener("submit", function (e) {
    // Hide loader
    document.getElementById("results").style.display = "none";
    // Show loader
    document.getElementById("loading").style.display = "block";

    setTimeout(calculateResult, 2000);

    e.preventDefault();
  });

// Calculate results

// **************************************{Event function}***********************************************
function calculateResult() {
  console.log("Calculating");

  // UL var
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  // value
  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayment = parseFloat(years.value) * 12;

  // Compute monthly payment

  const x = Math.pow(1 + calculatedInterest, calculatedPayment);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayment).toFixed(2);
    totalInterest.value = (monthly * calculatedPayment - principal).toFixed(2);

    // show results
    document.getElementById("results").style.display = "block";
    document.getElementById("loading").style.display = "none";
  } else {
    // console.log('Please check your numbers');
    showError("Please check your numbers");
  }
}

// showError
function showError(error) {
  clearError();
  // hide results
  document.getElementById("results").style.display = "none";
  document.getElementById("loading").style.display = "none";

  // get elements
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  // create a div
  const errorDiv = document.createElement("div");
  // add a class
  errorDiv.className = "alert alert-danger";
  // create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));
  //   insert error above heading
  card.insertBefore(errorDiv, heading);
  console.log(errorDiv);

  //   clear erro after 3 seconds
  setTimeout(clearError, 3000);
}

// ClearError function

function clearError() {
  if (document.querySelector(".alert")) {
    document.querySelector(".alert").remove();
  }
}
