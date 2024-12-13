const arr = [1, [2, [3]], [4], [5, [6, 7, [8]]]];

function flatArray(arr) {
  const res = [];
  (function rec(arr) {
    for (let i = 0; i < arr.length; i++) {
      const el = arr[i];
      if (Array.isArray(el)) {
        rec(el);
      } else {
        res.push(el);
      }
    }
  })(arr);
  return res;
}
console.log(flatArray(arr));
