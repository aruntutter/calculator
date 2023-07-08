"use strict";

const outputContainer = document.querySelector(".cal-output span");
const buttons = document.querySelectorAll(".cal-btn button");

buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

function handleButtonClick(event) {
  const button = event.target;
  const buttonText = button.textContent;

  if (buttonText === "AC") {
    outputContainer.textContent = "0";
  } else if (buttonText === "DE") {
    const currentOutput = outputContainer.textContent;
    if (currentOutput !== "0") {
      const newOutput = currentOutput.slice(0, -1);
      outputContainer.textContent = newOutput.length ? newOutput : "0";
    }
  } else if (buttonText === "=") {
    const currentOutput = outputContainer.textContent;
    const result = eval(currentOutput.replace("×", "*").replace("÷", "/"));
    outputContainer.textContent = result;
  } else {
    if (outputContainer.textContent === "0") {
      outputContainer.textContent = buttonText;
    } else {
      outputContainer.textContent += buttonText;
    }
  }
}
