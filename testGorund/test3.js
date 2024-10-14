const employees = [
    { id: 1, name: "John", salary: 50000, managerId: null },
    { id: 2, name: "Jane", salary: 60000, managerId: 1 },
    { id: 3, name: "Jake", salary: 40000, managerId: 1 },
    { id: 4, name: "Amy", salary: 70000, managerId: 2 }
  ];
 
  
  function hierarchicalOrder(list){
    let res =[];
    const higherManager = list.find((item)=> item.managerId == null);
    let result = Object.assign({},higherManager)
    res.push(higherManager);
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      if(item.managerId === null){
        continue;
      }
      if(item.managerId == 1){
        result['subordinates'] = [];
        result.subordinates.push(item)
      }else{
        // find the location;
        console.log(result);
        
        result.subordinates.forEach((_item)=>{

        if(_item.managerId === item.managerId -1){
             const isExist = _item['subordinates']
             if(isExist){
                isExist.push(item)
             }else{
                _item['subordinates'] = []
                _item.subordinates.push(item)
             }
        }
     })
      }
    }
    console.log(result);
  }

  console.log(hierarchicalOrder(employees));
  