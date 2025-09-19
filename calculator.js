// Start the table
document.write("<table>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

let results = [];

while (true) {
  let xInput = prompt("Enter the first number (x):");
  if (xInput === null) break;

  let operator = prompt("Enter an operator (+, -, *, /, %):");
  if (operator === null) break;

  let yInput = prompt("Enter the second number (y):");
  if (yInput === null) break;

  let x = parseFloat(xInput);
  let y = parseFloat(yInput);
  let result;

  // Validate inputs
  if (isNaN(x) || isNaN(y)) {
    result = "Error: Invalid number";
  } else if (!["+", "-", "*", "/", "%"].includes(operator)) {
    result = "Error: Invalid operator";
  } else {
    // Perform calculation
    switch (operator) {
      case "+": result = x + y; break;
      case "-": result = x - y; break;
      case "*": result = x * y; break;
      case "/": result = y !== 0 ? x / y : "Error: Division by zero"; break;
      case "%": result = y !== 0 ? x % y : "Error: Modulo by zero"; break;
    }
  }

  // Add row to table
  document.write("<tr><td>" + xInput + "</td><td>" + operator + "</td><td>" + yInput + "</td><td>" + result + "</td></tr>");

  // Store valid numeric results
  if (typeof result === "number" && !isNaN(result)) {
    results.push(result);
  }
}

document.write("</table>");

// Summary Table
if (results.length > 0) {
  let min = Math.min(...results);
  let max = Math.max(...results);
  let total = results.reduce((sum, val) => sum + val, 0);
  let avg = total / results.length;

  document.write("<h2>Summary of Valid Results</h2>");
  document.write("<table>");
  document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
  document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg.toFixed(2) + "</td><td>" + total + "</td></tr>");
  document.write("</table>");
} else {
  document.write("<p>No valid results to summarize.</p>");
}
