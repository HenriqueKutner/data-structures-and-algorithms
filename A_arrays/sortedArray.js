// Solution using just loops. O(n^2) bad

const sortedArray = (numbers) => {
  // Insertion sort algorithm
  for (let i = 1; i < numbers.length; i++) {
    let current = numbers[i];
    // I will analyze all the numbers before current
    let j = i - 1;
    // Until I reach the last one
    // value before my current one and my number under analysis is higher than the current one

    while (j >= 0 && numbers[j] > current) {
      // If the number under analysis is greater
      // I will replace the current one with the number under analysis
      numbers[j + 1] = numbers[j];
      j--;
    }

    numbers[j + 1] = current;
  }

  return numbers;
};
const arr = [45, 10, 3, 6, 4];
sortedArray(arr);
