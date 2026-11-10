function input() {
  // This function runs once to attach click handlers to all digit buttons.
  // The handlers remain active, so they append digits whenever a button is clicked.
  for (let digit = 0; digit <= 9; digit++) {
    // Convert the number to a string because getElementsByClassName expects a class-name string ("0" through "9").
    const button = document.getElementsByClassName(String(digit))[0];

    button.addEventListener("click", () => {
      document.querySelector(".ans").innerHTML += String(digit);
    });
  
};   
  }


input();
let firstNumber;
// Each operation takes two numbers and returns the resul
const operations = {
  multiply: (a, b) => a * b,
  minus: (a, b) => a - b,
  plus: (a, b) => a + b
};

let selectedOperation;

for (const name of Object.keys(operations)) {
  const button = document.querySelector(`.${name}`);

  button.addEventListener("click", () => {
    firstNumber = Number(document.querySelector(".ans").innerHTML);
    selectedOperation = operations[name];
    // Clear the display; subsequent digit clicks enter the second number here.
    document.querySelector(".ans").innerHTML = "";
  });
}
let button = document.querySelector(".equal");
button.addEventListener("click", () => {
  const secondNumber = Number(document.querySelector(".ans").innerHTML);
  document.querySelector(".ans").innerHTML = selectedOperation(
    firstNumber,
    secondNumber
  );
})