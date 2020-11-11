function arithmetic(operation) {
  var result;

  if (operation == "add") {
    var leftOp = document.getElementById("leftOperandAdd").value;
    var rightOp = document.getElementById("rightOperandAdd").value;
    result = parseInt(leftOp, 10) + parseInt(rightOp, 10);
    document.getElementById("addResult").innerHTML = result;
  }
  if (operation == "multiply") {
    var leftOp = document.getElementById("leftOperandMul").value;
    var rightOp = document.getElementById("rightOperandMul").value;
    result = parseInt(leftOp, 10) * parseInt(rightOp, 10);
    document.getElementById("mulResult").innerHTML = result;
  }
  if (operation == "divide") {
    var leftOp = document.getElementById("leftOperandDiv").value;
    var rightOp = document.getElementById("rightOperandDiv").value;
    // Check division by 0
    rightOp == 0
      ? (result = "undefined")
      : (result = parseInt(leftOp, 10) / parseInt(rightOp, 10));
    document.getElementById("divResult").innerHTML = result;
  }
  if (operation == "subtract") {
    var leftOp = document.getElementById("leftOperandSub").value;
    var rightOp = document.getElementById("rightOperandSub").value;
    result = parseInt(leftOp, 10) - parseInt(rightOp, 10);
    document.getElementById("subResult").innerHTML = result;
  }
}

function arithmeticOptimized(button) {
  var result;
  var leftOp = button.nextElementSibling.value; // left Operand
  var rightOp =
    button.nextElementSibling.nextElementSibling.nextElementSibling.value;
  var operand = button.nextElementSibling.nextElementSibling.innerHTML;

  switch (operand) {
    case "+":
      result = parseInt(leftOp, 10) + parseInt(rightOp, 10);
      break;
    case "*":
      result = parseInt(leftOp, 10) * parseInt(rightOp, 10);
      break;
    case "/":
      // Check division by 0
      rightOp == 0
        ? (result = "undefined")
        : (result = parseInt(leftOp, 10) / parseInt(rightOp, 10));
      break;
    case "-":
      result = parseInt(leftOp, 10) - parseInt(rightOp, 10);
      break;
  }
  // Print Result
  button.parentElement.lastElementChild.innerHTML = result;
}

function arithmeticReoptimized(button) {
  var result;
  var leftOp = button.parentElement.getElementsByClassName("leftOp")[0].value;
  var rightOp = button.parentElement.getElementsByClassName("rightOp")[0].value;
  var operand = button.parentElement.getElementsByClassName("operand")[0]
    .innerHTML;

  switch (operand) {
    case "+":
      result = parseInt(leftOp, 10) + parseInt(rightOp, 10);
      break;
    case "*":
      result = parseInt(leftOp, 10) * parseInt(rightOp, 10);
      break;
    case "/":
      // Check division by 0
      rightOp == 0
        ? (result = "undefined")
        : (result = parseInt(leftOp, 10) / parseInt(rightOp, 10));
      break;
    case "-":
      result = parseInt(leftOp, 10) - parseInt(rightOp, 10);
      break;
  }
  // Print Result
  button.parentElement.getElementsByClassName("result")[0].innerHTML = result;
}

function arithmeticPro(button) {
  var result;
  var leftOp = button.parentElement.getElementsByClassName("leftOp")[0].value;
  var rightOp = button.parentElement.getElementsByClassName("rightOp")[0].value;
  var operand = button.parentElement.getElementsByClassName("operand")[0]
    .innerHTML;
  // Check division by 0
  operand == "/" && rightOp == 0
    ? (result = "undefined")
    : (result = eval(
        `parseInt(${leftOp}, 10) ${operand} parseInt(${rightOp}, 10)`
      ));
  // Print Result
  button.parentElement.getElementsByClassName("result")[0].innerHTML = result;
}
