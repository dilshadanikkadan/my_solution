

const s = "ab#c";
const t = "ad#c";

function typedString(s, t) {
  let left = s.length - 1;
  let right = t.length - 1;


  
  while (left >=0 || right>=0) {
    if (s[left] == "#" || t[right] == "#") {
      if (s[left] == "#") {
        let cout_for_skip = 2;
        while (cout_for_skip !== 0) {
          if (s[left] == "#") {
            cout_for_skip += 2;
          }
          left--;
          cout_for_skip--;
        }
      }
      if (s[right] == "#") {
        let cout_for_skip = 2;
        while (cout_for_skip !== 0) {
          if (s[right] == "#") {
            cout_for_skip += 2;
          }
          right--;
          cout_for_skip--;
        }
      }
    } else {
      if (s[left] !== t[right]) {
        return false;
      } else {
        left--;
        right--;
      }
    }
    return true
  }
}
console.log(typedString(s, t));
