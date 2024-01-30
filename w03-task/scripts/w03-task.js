// Addition Feature
function add(number1, number2) {
  return number1 + number2;
}

function addNumbers() {
  let add1Value = Number(document.querySelector("#add1").value);
  let add2Value = Number(document.querySelector("#add2").value);
  let sumElement = document.querySelector("#sum");

  if (isNaN(add1Value) || isNaN(add2Value)) {
      sumElement.value = "Invalid Input";
  } else {
      let result = add(add1Value, add2Value);
      sumElement.value = result;
  }
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

// Subtraction Feature
let subtract = function (number1, number2) {
  return number1 - number2;
};

let subtractNumbers = () => {
  let subtract1Value = Number(document.querySelector("#subtract1").value);
  let subtract2Value = Number(document.querySelector("#subtract2").value);
  let differenceElement = document.querySelector("#difference");

  if (isNaN(subtract1Value) || isNaN(subtract2Value)) {
      differenceElement.value = "Invalid Input";
  } else {
      let result = subtract(subtract1Value, subtract2Value);
      differenceElement.value = result;
  }
};

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

// Multiplication Feature
let multiply = (factor1, factor2) => factor1 * factor2;

let multiplyNumbers = () => {
  let factor1Value = Number(document.querySelector("#factor1").value);
  let factor2Value = Number(document.querySelector("#factor2").value);
  let productElement = document.querySelector("#product");

  if (isNaN(factor1Value) || isNaN(factor2Value)) {
      productElement.value = "Invalid Input";
  } else {
      let result = multiply(factor1Value, factor2Value);
      productElement.value = result;
  }
};

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

// Division Feature
function divide(dividend, divisor) {
  return dividend / divisor;
}

let divideNumbers = () => {
  let dividendValue = Number(document.querySelector("#dividend").value);
  let divisorValue = Number(document.querySelector("#divisor").value);
  let quotientElement = document.querySelector("#quotient");

  if (isNaN(dividendValue) || isNaN(divisorValue) || divisorValue === 0) {
      quotientElement.value = "Invalid Input";
  } else {
      let result = divide(dividendValue, divisorValue);
      quotientElement.value = result;
  }
};

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

// Get Total Due Feature
document.querySelector("#getTotal").addEventListener("click", function () {
  let subtotalValue = Number(document.querySelector("#subtotal").value);
  let memberCheckbox = document.querySelector("#member");
  let totalElement = document.querySelector("#total");

  if (isNaN(subtotalValue)) {
      totalElement.textContent = "Invalid Subtotal";
  } else {
      let totalDue = subtotalValue;

      if (memberCheckbox.checked) {
          totalDue *= 0.8; // Apply 20% discount for club members
      }

      totalElement.textContent = `$ ${totalDue.toFixed(2)}`;
  }
});

// Array Methods - Functional Programming
let numbersArray = Array.from({ length: 13 }, (_, index) => index + 1);
document.querySelector("#array").textContent = numbersArray.join(", ");

let oddNumbers = numbersArray.filter(number => number % 2 !== 0);
document.querySelector("#odds").textContent = oddNumbers.join(", ");

let evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.querySelector("#evens").textContent = evenNumbers.join(", ");

let sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0);
document.querySelector("#sumOfArray").textContent = sumOfArray;

let multipliedArray = numbersArray.map(number => number * 2);
document.querySelector("#multiplied").textContent = multipliedArray.join(", ");

let sumOfMultiplied = multipliedArray.reduce((sum, number) => sum + number, 0);
document.querySelector("#sumOfMultiplied").textContent = sumOfMultiplied;

// Update the year in the footer
document.getElementById("year").innerHTML = new Date().getFullYear();
