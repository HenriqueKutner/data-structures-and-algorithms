// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "f"];

// First solution (brute and quadratic)

// Based that I will return the first match

// const findCommonItem = (arr1, arr2) => {
//   for (let i = 0; i <= arr1.length - 1; i++) {
//     for (let j = 0; j <= arr2.length - 1; j++) {
//       if (arr1[i] === arr2[j]) {
//         return "Found it";
//       }
//     }
//   }
//   return "Not found it";
// };

// console.log(findCommonItem(array1, array2));

// Second solution
// I will try to make linear

const findCommonItem = (arr1, arr2) => {
  let count = 0;
  for (let i = 0; i < arr2.length; i++) {
    const actualValue = arr1[count];
    if (arr2[i] === actualValue) {
      return "Found it!";
    }
    count++;
  }
  return "Not found it";
};

console.log(findCommonItem(array1, array2));
