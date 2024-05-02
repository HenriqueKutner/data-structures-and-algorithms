const numbers = [2, 3, 4, 5];

function unshiftMethod(values) {
  for (let i = 0; i < numbers.length - 1; i++) {
    const currentValue = numbers[i];
    numbers[i + 1] = numbers[i];
  }
}

unshiftMethod([1]);
