// 5) . Write a function that finds the second longest word in a sentence.
// O/P: India
const str = 'India is my country';

function secondLargestStr(str){
    const arr = str.split(" ")
    let longest = 0;
    let secondLongest = 0;
   for (let j = 0; j < arr.length ; j++) {
    const el = arr[j]

      if( el.length > arr[longest].length ){
          secondLongest = longest;
          longest = j
        }else if(el.length > arr[secondLongest]){
            secondLongest = j
        }
        
    }
    console.log(arr[secondLongest]);
   return longest
}
secondLargestStr(str)