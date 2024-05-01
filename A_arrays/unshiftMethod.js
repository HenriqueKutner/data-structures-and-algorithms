const arr = [2, 3];

function unshiftMethod(valuesToInsert) {
  const currentSize = arr.length;
  const newSize = currentSize + valuesToInsert.length;
  for (let i = 0; i < newSize; i++) {
    console.log(i);
  }
}

unshiftMethod([1]);
