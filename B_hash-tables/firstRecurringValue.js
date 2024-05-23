// Google question
// Given an array = [2,5,1,2,3,4]
// It should return 2

function firstRecurringValue(input) {
  if (!input) {
    return undefined;
  }
  const map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    }
    map[input[i]] = i;
  }
}

console.log(firstRecurringValue([2, 5, 1, 2, 3, 4]));

// const t = {};
// const arr = [5, 6, 7];

// t["name"] = "Hen";
// t[arr[0]] = "cinco";

// console.log(t[arr[0]]);
