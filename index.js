
let buttonCounter = 0
const buttonElement = document.querySelector('#addtrans');
//const buttonRemover = document.querySelector('#remover${buttonCounter}');
let expendListElement = document.querySelector('#register');
let incomeElement = document.querySelector('#income');
let expensesElement = document.querySelector('#expenses');
let totalElement = document.querySelector('#total');
let positive = 0;
let negative = 0;
let total = 0;

function saveRegister(expense) {
  buttonCounter = buttonCounter + 1;
  //crear la info
  let expenseElement = ` ${expense.concept} ${expense.quantity} 
  <button id= "remover${buttonCounter}">❌</button>  `;
  //crear la tag
  let expenseTag = document.createElement("p");
  //meter info en tag
  expenseTag.innerHTML = expenseElement;
  //metar tag en el nodo de html
  expendListElement.appendChild(expenseTag);
}

function saveEntry(expense) {
  let cant = parseFloat(expense.quantity);
  if (cant >= 0) {
    positive = positive + cant;
    incomeElement.innerHTML = (positive)
  } else if (cant < 0) {
    negative = negative + cant;
    expensesElement.innerHTML = (negative)
  };
  total = positive + negative + "€";
  totalElement.innerHTML = (total)
};

// añadir listener al evento click del botón
buttonElement.addEventListener("click", (event) => {
  event.preventDefault();
  const inputConcept = document.querySelector('#concept');
  const inputQuantity = document.querySelector("#quantity");
  // guardamos el valor en localStorage
  //localStorage.setItem("savedText", inputConcept.value);
  //localStorage.setItem("savedCant", inputQuantity.value);
  let expense = {
    concept: inputConcept.value,
    quantity: inputQuantity.value
  };
  // ejecutar la función que guarda los datos en el historial
  saveRegister(expense);

  //Ejecutar la función que suma un ingreso o un gasto
  saveEntry(expense);

  // borrar lo que hay escrito en el input
  inputConcept.value = "";
  inputQuantity.value = "";
});

// Añadir listener al evento click del remover
//buttonRemover.addEventListener("click", (event) => {
//  event.preventDefault();

//})
