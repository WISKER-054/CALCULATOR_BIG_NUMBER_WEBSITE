//giá trị thứ hạng đầu tiên
let operand1 = "";
//giá trị thứ hạng cuối cùng
let operand2 = "";
//giá trị kết quả
let operator;

function buttonHandler(btn, value) {
  //resultInput = lấy đối tượng và hiển thị
  const resultInput = document.getElementById("ip");
  const pressedValue = value || btn.innerText;

  if (isNaN(pressedValue)) {
    if (pressedValue === "C") {
      if (operator) {
        operand2 = operand2.slice(0, -1);
        resultInput.value = operand2;
      } else {
        operand1 = operand1.slice(0, -1);
        resultInput.value = operand1;
      }
    } else if (pressedValue === "AC") {
      operand1 = "";
      operand2 = "";
      operator = undefined;
      resultInput.value = "";
    } else {
      operator = pressedValue;
    }
  } else {
    if (operator) {
      operand2 += pressedValue;
      resultInput.value = operand2;
    } else {
      operand1 += pressedValue;
      resultInput.value = operand1;
    }
  }
}

function calculate() {
  const resultInput = document.getElementById("ip");
  if (operand1 && operand2 && operator) {
    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);

    switch (operator) {
      case "+":
        resultInput.value = num1 + num2;
        break;
      case "-":
        resultInput.value = num1 - num2;
        break;
      case "*":
        resultInput.value = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          resultInput.value = "Error";
        } else {
          resultInput.value = num1 / num2;
        }
        break;
    }

    operand1 = resultInput.value;
    operand2 = "";
    operator = undefined;
  }
}
