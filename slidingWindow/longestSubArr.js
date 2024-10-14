const arr = [4, 3, 1, 2, 2, 5,1,1, 8];
const k = 10;
let i =0;

function longestSubArr(arr,k){
    let sum = 0;
    let longest =0;

    for(var j=0;j<arr.length;j++){

        const el = arr[j];

        sum += el;

        while(sum >= k){
            sum -= arr[i];
            i++;
        }
        
        longest =Math.max(longest,j - i +1);   
    }
    
   console.log(arr.slice(i,j-1));
    return longest
}

console.log(longestSubArr(arr,k));
