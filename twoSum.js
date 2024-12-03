
var twoSum = function(nums, target) {                 //if we have a array [2,3,4,5] and target = 7
    for (let i = 0; i < nums.length; i++) {            //first for loop iterate the i index   0 index it point to 1st number
        for (let j = i + 1; j < nums.length; j++) {      // j index   i+1 = 0+1 = 1   it point to 2nd number
            if (nums[i] + nums[j] === target) {          //check if i+j index value sum is egual to target return those index
                return [i, j];
            }
        }
    }
    //if no pair of found
    return []; 
};

console.log(twoSum([2, 5, 4, 12], 9));  
