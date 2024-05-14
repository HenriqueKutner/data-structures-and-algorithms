function removeDuplicates(nums) {
  const newArray = [];
  const originalArraySize = nums.length;
  for (let i = 0; i < nums.length; i++) {
    let currentValue = nums[i];
    if (!newArray.includes(currentValue)) {
      newArray.push(currentValue);
    }
  }
  const difference = originalArraySize - newArray.length;
  console.log(difference);
  for (let i = 0; i < difference; i++) {
    newArray.push("_");
  }
  return newArray;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// const test = [1, 2, 3, 4, 5];
// test.splice(2, 1); Removes 2 elements starting from index 1
// console.log(test); // Output: [1, 4, 5]
