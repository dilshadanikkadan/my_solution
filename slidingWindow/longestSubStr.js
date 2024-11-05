const string ='abcbdaac';

function sliding(string){

 let hash_map ={};
  
 let max =0;

 let i =0;

  for(let j = 0;j<string.length;j++){


    
    const char = string[j];
    
    if(char in hash_map && hash_map[char] >= i){

        i = hash_map[char] +1;

    }
        max = Math.max(max,j -i +1)
        
        hash_map[char]= j;
    
  }

}
sliding(string)