const display = document.querySelector(".display");

function appendDisplay(number) {
  display.value += number;
}

function  calculate() {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value= "Error"
  }
}

function clearData() {
  display.value = "";
}
