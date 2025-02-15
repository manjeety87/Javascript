// Manjeet Singh Yadav - Date: 12-02-2025
const conversionRates = {
  USDToEuro: 0.9683,
  EuroToUSD: 1 / 0.9683,
  USDToFranc: 1 / 0.9683,
  FrancToUSD: 1 / 0.93,
  USDToCAD: 1.43182,
  CADToUSD: 1 / 1.43182,
  INRToUSD: 0.01151,
  USDToINR: 1 / 0.01151,
};
const convertCurrency = (amount, fromCurrency, toCurrency) => {
  const key = `${fromCurrency}To${toCurrency}`;
  return (amount * conversionRates[key]).toFixed(2) || "Invalid conversion";
};

// Handle the conversion for each button
const handleConversion = (button, fromCurrency, toCurrency) => {
  console.log(button.id, fromCurrency, toCurrency);

  const inputElement = document.querySelector(`#${button.id}Input`);
  const resultElement = document.querySelector(`#${button.id}Output`);
  const amount = parseFloat(inputElement.value);
  const result = convertCurrency(amount, fromCurrency, toCurrency);
  resultElement.innerText = result;
};

// Add event listeners to each button by ID
document.getElementById("UStoCAD").addEventListener("click", () => {
  handleConversion(document.getElementById("UStoCAD"), "USD", "CAD");
});

document.getElementById("CADtoUSD").addEventListener("click", () => {
  handleConversion(document.getElementById("CADtoUSD"), "CAD", "USD");
});

document.getElementById("UStoEuro").addEventListener("click", () => {
  handleConversion(document.getElementById("UStoEuro"), "USD", "Euro");
});

document.getElementById("EurotoUSD").addEventListener("click", () => {
  handleConversion(document.getElementById("EurotoUSD"), "Euro", "USD");
});

document.getElementById("UStoINR").addEventListener("click", () => {
  handleConversion(document.getElementById("UStoINR"), "USD", "INR");
});

document.getElementById("INRtoUSD").addEventListener("click", () => {
  handleConversion(document.getElementById("INRtoUSD"), "INR", "USD");
});

document.getElementById("clear").addEventListener("click", function () {
  document.querySelectorAll(".amount").forEach((input) => (input.value = ""));
  document
    .querySelectorAll("[id$='Output']")
    .forEach((p) => (p.innerText = "output"));
  document.querySelector(".amount").focus();
});
// Manjeet Singh Yadav - Date: 12-02-2025