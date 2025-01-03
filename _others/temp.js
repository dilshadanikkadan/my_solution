const arr = [11, 5, 9, 3, 4, 3, 4, 5, 9];

function findUnique(arr) {
  let res = 0;
  for (const el of arr) {
    res ^= el;
  }
  return res;
}
console.log(findUnique(arr));
