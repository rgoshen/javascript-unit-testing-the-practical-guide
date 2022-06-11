export function generateResultText(calculationResult) {
  let resultText = '';

  if (calculationResult === 'invalid') {
    resultText = 'Invalid input. You must enter valid numbers.';
  } else if (calculationResult !== 'no-calc') {
    resultText = 'Result: ' + result;
  }

  return resultText;
}

export function outputResult(resultText) {
  const output = document.getElementById('result');
  output.textContent = resultText;
}
