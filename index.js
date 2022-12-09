
const buttonElement = document.querySelector('#addtrans');

// añadir listener al evento click del botón
buttonElement.addEventListener("click", () => {
  
  // accedemos al DOM para buscar el input
  const inputConcept = document.querySelector('#concept');
  const inputQuantity = document.querySelector("#quantity");
  // guardamos el valor en localStorage
  localStorage.setItem("savedText", inputConcept.value);
  localStorage.setItem("savedCant", inputQuantity.value);


  // accedemos al DOM para buscar el párrafo
  const paragraphElementC = document.querySelector('#conceptHist');
  const paragraphElementQ = document.querySelector('#quantitytHist');
  
  // escribimos el texto que se ha introducido en el input dentro del parrafo
  paragraphElementC.textContent = inputConcept.value;
  paragraphElementQ.textContent = inputQuantity.value;

  // borrar lo que hay escrito en el input
  // inputConcept.value = "";
  // inputQuantity.value = "";
})


const textFromLocalStorageC = localStorage.getItem("savedText")

if (textFromLocalStorageC !== null) {
  const paragraphElementC = document.querySelector('#conceptHist');
  paragraphElementC.textContent = textFromLocalStorageC;
}

const textFromLocalStorageQ = localStorage.getItem("savedCant")

if (textFromLocalStorageQ !== null) {
  const paragraphElementQ = document.querySelector('#quantityHist');
  paragraphElementQ.textContent = textFromLocalStorageQ;
}


