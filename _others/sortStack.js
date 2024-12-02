const arr = [2, 6, 5, 1, 3, 4];

function sortWithStack(stack) {
  const res = [];

  while (stack.length) {
    let temp = stack.pop();
    while (res.length > 0 && res.at(-1) > temp) {
      stack.push(res.pop());
    }
    res.push(temp);
  }
  return res;
}
console.log(sortWithStack(arr));
