let arr = [1, 2, 3, 4];

function unshiftMethod(valueToInsert) {
  arr = [...valueToInsert, ...arr];
}

unshiftMethod([0, 5]);
console.log(arr);
