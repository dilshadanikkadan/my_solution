const array = [-1, -2, 4, -1, 2, 1, -5, -2, 3];

function maxSubArray(arr) {
  let currentSum = 0;
  let max = arr[0];
  for (const num of arr) {
    if (currentSum < 0) {
      currentSum = 0;
    }
    currentSum += num;
    max = Math.max(max, currentSum);
  }
  return max;
}

console.log(maxSubArray(array));
