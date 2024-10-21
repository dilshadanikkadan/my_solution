const str = "abcttttthdksjttdskjhbbbbbbbbb";

function longestStr(str) {
  let longest = "";
  for (let j = 0; j < str.length; j++) {
    let count = 1;
    let i = j + 1;
    let res = "";

    while (str[j] == str[i]) {
      res += `${str[i]}`;
      count++;
      j++;
      i++;
    }

    if (res.length > longest.length) {
      longest = res;
    }
  }
  return longest;
}

console.log(longestStr(str));
