const s = "anagram";
const t = "nagaram";

function anagram(s,t) {
   
    // creating hashMap  to store frq;

   let hash_map = {};

   // TODO : storing frq of first str
   for(let char of s){    
     if(char in hash_map){
        hash_map[char]++
     }else{
        hash_map[char] = 1;
     }
   }

   
   for (const char of t) {
      if(char in hash_map){
        hash_map[char]--
      }else{        
        return false
      }
   }
   return true
}

console.log(anagram(s,t));
