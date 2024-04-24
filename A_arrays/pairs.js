// Log all pairs of array

// const arr = [1,2,3,4,5,6]

// output 1,2 1,3 1,4 1,5 1,6
// output 2,1 2,3 2,4 2,5 2,6
// output 3,1 3,2 3,3 3,4 3,6

const numbers = [1, 2, 3, 4, 5, 6];
numbers.length;

const myFunction = (n) => {
  for (let i = 0; i < n.length; i++) {
    console.log("--");
    for (let j = 0; j < n.length; j++) {
      console.log("output", numbers[i] + "," + numbers[j]);
    }
    console.log("/////");
  }
};

myFunction(numbers);

// O(n^2)
