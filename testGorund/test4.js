const string ='abcbdaac';

function pointer(str){
   let i =0;
   let longest = 0;
   let hash_map ={};
   for (let j = 0; j < str.length; j++) {
    const char = str[j];
      if(char in hash_map && hash_map[char] >= i){        
          i = hash_map[char] +1;
      }
      hash_map[char] = j;
      longest= Math.max(longest,j-i+1)
   }    
   console.log(longest);

}

pointer(string);