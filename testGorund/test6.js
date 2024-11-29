const array = [102, 431, 76, 89];

function elReverse(el) {
  let result = "";
  const _newEl = String(el);

  for (let i = _newEl.length - 1; i >= 0; i--) {
    const element = _newEl[i];
    result += `${element}`;
  }
  return result;
}

function reverseArr(list) {
  let res = [];
  for (const el of list) {
    const response = elReverse(el);
    res.unshift(Number(response));
  }
    console.log(res);
}
reverseArr(array);



