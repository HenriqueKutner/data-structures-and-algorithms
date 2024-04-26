const arr = [2, 3, 4];

function pushMethod(n) {
  for (let i = 0; i < n.length; i++) {
    arr[arr.length] = n[i];
  }
  // let i = 0;
  // while (i < n.length) {
  //   arr[arr.length] = n[i];
  //   i++;
  // }
  return arr;
}

pushMethod([1, 6, 4]);
console.log(arr);
