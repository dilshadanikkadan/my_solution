const array1 = [
    { id: 1, name: "Alice", scores: { math: 90, english: 80 } },
    { id: 2, name: "Bob", scores: { math: 85, english: 75 } }
];

const array2 = [
    { id: 1, name: "Alice", scores: { science: 70,geography:65 } },
    { id: 2, name: "Bob", scores: { science: 90,geography:55 } },
    { id: 3, name: "Charlie", scores: { math: 95, english: 85 } }
];

// output:-

// [
//     { id: 1, name: "Alice", scores: { math: 90, english: 80, science: 70 ,geography:65} },
//     { id: 2, name: "Bob", scores: { math: 85, english: 75,science: 90,geography:55 } },
//     { id: 3, name: "Charlie", scores: { math: 95, english: 85 } }
// ];

const mergeArr = (arr1,arr2)=>{
   let hash_map ={};
   let res =[]
   for (let i = 0; i < arr1.length; i++) {
    hash_map[arr1[i].id] = arr1[i]
   }
   
   for (let i = 0; i < arr2.length; i++) {
    const el = arr2[i]
      if(hash_map[el.id]){
        const {scores,...rest} = hash_map[el.id]
        res.push({...rest,scores:{...scores,...arr2[i].scores}})
      }else{
        res.push(el)
      }
   }
   console.log(res);
   
}

mergeArr(array1,array2)