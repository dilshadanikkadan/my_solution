// Input: s = "3[a2[c]]"
// Output: "accaccacc"
const string = "3[abc2[d]]";


function decodeStr(str) {
  let res = [];
  const stack = [];


  function rec(str,i) {
    let j = i + 2;
    let _str = "";
    while (str[j] !== "]") {
      _str += `${str[j]}`;
      if(str[i] === '['){
          if (!isNaN(str[j])){
            stack.push(str[j])
              if (str[j + 1] == "[") {
                 return rec(str,j+1+2)
                }
          }
      }
      j++;
    }
    return _str
  }

  for (let i = 0; i < str.length; i++) {
    const el = str[i];
    if (!isNaN(el)) {
      stack.push(el);
      if (str[i + 1] == "[") {
        const _str = rec(str,i)
        res.push([stack.pop(), _str]);
      }
    }
  }
console.log(res);

}

decodeStr(string);
