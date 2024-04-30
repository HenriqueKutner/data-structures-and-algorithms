function reverseString(value) {
  const newArr = [];

  for (let i = value.length - 1; i >= 0; i--) {
    newArr.push(value[i]);
  }
  return newArr;
}

const reversed = reverseString(["h", "e", "l", "l", "o"]);
console.log(reversed);
