// First attempt. We decided to create a function that
// takes a string argument that states the arithmetic operation
// to be performed. We then use a series of 'if' statements to
// determine exactly which operation is to be performed, using
// the string argument, and then do the calculation.
// Finally, the result is posted in the result span.
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

// Our next attempt was to create a function that takes in the element
// calling the function as an argument. Using this element as a reference point,
// we then used the DOM navigation (nextElementSibling) features to select
// the appropriate elements and, subsequently, their input values. Finally,
// we use a 'switch' statement to determine which operation is to be performed,
// and perform it. This approach appears to be an improvement from the previous
// one, but it has a huge pitfal since any alteration in the order of the
// elements in the parent div will break the code.
function arithmeticOptimized(button) {
  var result;
  var leftOp = button.nextElementSibling.value;
  var rightOp =
    button.nextElementSibling.nextElementSibling.nextElementSibling.value;
  var operator = button.nextElementSibling.nextElementSibling.innerHTML;

  switch (operator) {
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

// For this approach, we created a function that uses a combination of DOM
// navigation and element classes. This approach improves on the previous
// approach in that it no longer is dependent on the element order inside the
// parent div anymore since the frame of reference now is the parent itself, not
// the button argument (child). So, using the parent element and classes we can
// easily find the necessary elements to perform the operation and, using the
// same technique with the 'switch' statements as in the previous approachas,
// we determine which operation we need to perform and perform it.
function arithmeticReoptimized(button) {
  var result;
  var leftOp = button.parentElement.getElementsByClassName("leftOp")[0].value;
  var rightOp = button.parentElement.getElementsByClassName("rightOp")[0].value;
  var operator = button.parentElement.getElementsByClassName("operator")[0]
    .innerHTML;

  switch (operator) {
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

// This is, by far, the simplest approach. We created a function that, just like
// in the previous two approaches, used the calling element's parent as a
// reference to determine which operation needs to be perform, as well as how
// to obtain the necessary values. The main difference here is that we don't
// use a switch statement. Instead, we construct a string which represents
// the operation that needs to be performed and, using the eval( ) function,
// we evaluate the string as a mathematical expression.
function arithmeticPro(button) {
  var result;
  var leftOp = button.parentElement.getElementsByClassName("leftOp")[0].value;
  var rightOp = button.parentElement.getElementsByClassName("rightOp")[0].value;
  var operator = button.parentElement.getElementsByClassName("operator")[0]
    .innerHTML;
  // Check division by 0
  operator == "/" && rightOp == 0
    ? (result = "undefined")
    : (result = eval(
        `parseInt(${leftOp}, 10) ${operator} parseInt(${rightOp}, 10)`
      ));
  // Print Result
  button.parentElement.getElementsByClassName("result")[0].innerHTML = result;
}
