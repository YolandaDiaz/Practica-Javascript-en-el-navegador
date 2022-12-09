
const buttonElement = document.querySelector('#addtrans');
let expendListElement = document.querySelector('#historial');

function saveExpense(expense) {
    let expenseElement = ` <p>${expense.concept} ${expense.quantity} </p> `;
    let expenseTag = document.createElement("p");
    expenseTag.innerHTML = expenseElement;
    expendListElement.appendChild(expenseTag);
}

// añadir listener al evento click del botón
buttonElement.addEventListener("click", (event) => {
  event.preventDefault()
  // accedemos al DOM para buscar el input
  const inputConcept = document.querySelector('#concept');
  const inputQuantity = document.querySelector("#quantity");

  // guardamos el valor en localStorage
  //localStorage.setItem("savedText", inputConcept.value);
  //localStorage.setItem("savedCant", inputQuantity.value);

  let expense = {
    concept: inputConcept.value,
    quantity: inputQuantity.value
  };

  saveExpense(expense);

  // borrar lo que hay escrito en el input
  inputConcept.value = "";
  inputQuantity.value = "";
});
