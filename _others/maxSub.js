// const insertionIndex = (arr, n) => {
//   const isDescending = arr[0] > arr[arr.length - 1];
//   const index = arr.findIndex((el) => (isDescending ? n >= el : n <= el));
//   return index === -1 ? arr.length : index;
// };

// console.log(insertionIndex([5, 3, 2, 1], 4));
// // 1
// insertionIndex([30, 50], 40); // 1

const arr = [
  [1, 5],
  [-8, 2],
  [10, -11],
  [4, 8],
  [9, -10],
  [3, 3],
];

// wtite a fn to  find in given array how much pair sum is positive;

const positivePairCount = (arr, fn) => arr.filter(fn);

// console.log(positivePairCount(arr, (item) => item[0] + item[1] >= 0));

const largeArr = Array.from({ length: 100 }, (_, i) =>
  Math.floor(Math.random() * 100)
);
const smallArr = [1, 2, 3, 4, 1, 5];

// console.log(smallArr.lastIndexOf(1));

const removeNonUnique = (arr) =>
  [...new Set(arr)].filter((x) => arr.indexOf(x) === arr.lastIndexOf(x));

console.log(removeNonUnique([1, 2, 2, 3, 4, 4, 5]));

const simpsons = [
  { name: "Lisa", age: 8, username: "lisa_simpson" },
  { name: "Homer", age: 36, username: "homer_simpson" },
  { name: "Marge", age: 34, username: "marge_simpson" },
  { name: "Bart", age: 10, username: "bart_simpson" },
];

const pluck = (arr, keys) => arr.map((item) => keys.map((i) => item[i]));

console.log(pluck(simpsons, ["name", "age"]));
