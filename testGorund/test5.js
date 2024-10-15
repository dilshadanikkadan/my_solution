const nestedArray = [1, [2, 3], [4, [5, 6]], 7];
const res = [];
function flattenArr(arr) {
  for (const el of arr) {
    if (typeof el != "number") {
      flattenArr(el);
    } else {
      res.push(el);
    }
  }
}
console.log(flattenArr(nestedArray));
