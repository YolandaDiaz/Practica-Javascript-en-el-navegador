
let buttonCounter = 0;
const buttonElement = document.querySelector('#addtrans');
const buttonRemover = document.querySelector(`#remover${buttonCounter}`);
let expendListElement = document.querySelector('#register');
let incomeElement = document.querySelector('#income');
let expensesElement = document.querySelector('#expenses');
let totalElement = document.querySelector('#total');
let listRegister = [];
let positive = 0;
let negative = 0;
let total = 0;

function saveRegister(expense) {
  let expenseElement = ` ${expense.concept} --------> ${expense.quantity} €
  <button class="buttonRemove" onclick="removeClicked(${buttonCounter})">❌</button> `;
  let expenseTag = document.createElement("p");
  expenseTag.setAttribute("id", `${buttonCounter}`);
  expenseTag.innerHTML = expenseElement;
  expendListElement.appendChild(expenseTag);
};

function saveEntry(expense) {
  let cant = parseFloat(expense.quantity);
  if (cant >= 0) {
    positive = positive + cant;
    incomeElement.innerHTML = (positive)
  } else if (cant < 0) {
    negative = negative + cant;
    expensesElement.innerHTML = (negative)
  };
  total = positive + negative + " €";
  totalElement.innerHTML = (total)
};

function deleteEntry(x) {
  for (let index = 0; index < listRegister.length; index ++) {
    if (listRegister[index].id === x) {
      let cantRem = listRegister[index].quantity;
      if (cantRem >= 0) {
        positive = positive - cantRem;
        incomeElement.innerHTML = (positive)
      } else if (cantRem < 0) {
        negative = negative - cantRem;
        expensesElement.innerHTML = (negative)
      };
      total = positive + negative + " €";
      totalElement.innerHTML = (total)
    }
  }
};

function removeClicked(x) {
  const prrev = document.getElementById(x);
  prrev.remove();
  deleteEntry(x);
}; 

buttonElement.addEventListener("click", (event) => {
  event.preventDefault();
  buttonCounter ++;
  const inputConcept = document.querySelector('#concept');
  const inputQuantity = document.querySelector("#quantity");
  let expense = {
    concept: inputConcept.value,
    quantity: parseFloat(inputQuantity.value),
    id: buttonCounter,
  };

  listRegister.push (expense);
  saveRegister(expense);
  saveEntry(expense);

  inputConcept.value = "";
  inputQuantity.value = "";
});


