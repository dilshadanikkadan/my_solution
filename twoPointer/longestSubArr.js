
const array = [1,2,4,6,7,8,10,11,12,13,16,17,18,19,20,3];

function maxSubArray(arr){

   let longest = 0;
   let count = 0;
   let start =0;
   let end = 0;
   
   for(let j=0;j<arr.length;j++){
     const num = arr[j];
     const next_num = arr[j+1];
     if(num + 1 === next_num){
       count++
     }else{
       count++
       if(count > longest){
         longest = count;
         start = j - count +1;
         end = j;
       }
       count = 0;
     }
   }

   return arr.slice(start,end+1);

}
maxSubArray(array)