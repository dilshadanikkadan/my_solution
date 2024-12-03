// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]

const temperatures = [73,74,75,71,69,72,76,73];

function findDiff(list){
  const stack = [];
  
  let result = new Array(list.length).fill(0);

  for (let i = 0; i < list.length; i++) {
      while(stack.length  > 0 && list[i] > list[stack.at(-1)]){
        const idx = stack.pop();
        result[idx]= i - idx
      }
      stack.push(i)
    }
    return result;
}
console.log(findDiff(temperatures));
