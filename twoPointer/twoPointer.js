
const points = [2, 5, 8, 11, 15, 18];
const  k = 6;

function twoPointer(points,k){
   
   const sortArr = points.sort((a,b)=> a-b);

   let max = 0;

   let i = 0;

   let j = 1;

   while(i < sortArr.length && j < sortArr.length){

    const el = sortArr[i];

    const next_el = sortArr[j];
    
     if(Math.abs(el - next_el) <= k){

        const result = next_el - el;
        
        max= Math.max(max,result);

       j++;
       
     }else{

        i++;

        if(i === j){
            j++
        }
        
     }
   }
   return max
   
}


twoPointer(points,k)