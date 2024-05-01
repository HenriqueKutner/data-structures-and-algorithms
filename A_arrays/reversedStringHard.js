// Time complexity O(n)
// Reverse an array of strings but do not create a new array. (Ignoring the fact that strings in javascript are immutable)
function reverseStringHard(value) {
  let sizeValue = value.length - 1;
  for (let i = 0; i < sizeValue; i++) {
    const currentValue = value[i];
    const lastValue = value[sizeValue];
    value[i] = lastValue;
    value[sizeValue] = currentValue;
    sizeValue--;
  }
  return value;
}

console.log(reverseStringHard(["H", "E", "L", "L", "O"]));
console.log(reverseStringHard(["T", "E", "S"]));
console.log(
  reverseStringHard(["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"])
);
