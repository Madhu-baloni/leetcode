var reduce = function(nums, fn, init) {
    let val = init;
    for (let i = 0; i < nums.length; i++)  
        val = fn(val, nums[i]);  // Apply fn to accumulator and current element
    
    return val;  
}

// Step-by-step iteration:
// Start with val = 0 (the init value).
// In the first iteration, val = fn(0, 1) → val = 0 + 1 = 1
// In the second iteration, val = fn(1, 2) → val = 1 + 2 = 3
// In the third iteration, val = fn(3, 3) → val = 3 + 3 = 6
// In the fourth iteration, val = fn(6, 4) → val = 6 + 4 = 10