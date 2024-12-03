var containsDuplicate = function(nums) {
    const flag = false;
    for(let i =0 ; i<=nums.length-1; i++){
      for(let j =nums.length-1 ; j>=i+1; j--){
        if(nums[i] === nums[j]){
            return true;
        } 
      }   
    }
    return flag;
};
console.log(containsDuplicate([1,2,3,4,5,4]))