const arr = ["a", "b", "c", "e"];

function findFirstMissingLetter(arr) {
  for (let i = 0; i < arr.length; i++) {

    const char = arr[i];
    const next_char = arr[i+1];

    if(i< arr.length -1 && char.charCodeAt(0) + 1 !== next_char.charCodeAt(0)){
        return String.fromCharCode(char.charCodeAt(0)+1)
    }

  }
  return "no missing"
}


console.log(findFirstMissingLetter(arr));
