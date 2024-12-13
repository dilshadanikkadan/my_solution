var findKthLargest = function (nums, k) {

    const findLargest = (arr) => {
        let max = 0;
        for(i=1;i<arr.length;i++){
          if(arr[i] > arr[max]){
              max = i
          }
        }
        return {
            max:arr[max],
            index:max
        }
    }

    let j = 0;
    let kth_largest= nums[0];
    const nums_ = [...nums];
    console.log("k is",k);
    
    while (j < k) {
        
        const {max,index} = findLargest(nums_);
        nums_.splice(index,1);
        
        kth_largest = max
        j++
    }
    console.log(kth_largest)
    return kth_largest
};
console.log(findKthLargest([3,2,3,1,2,4,5,5,6],  4));
