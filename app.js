var isMonotonic = function(nums) {
    let length = nums.length
    if (length === 1) return true
    let increasing = 0
    let decreasing = 0
    for(let i=0; i < length - 1; i++){
        if(nums[i] <= nums[i+1]) increasing = increasing + 1
        
        if(nums[i] >= nums[i+1]) decreasing = decreasing + 1
        
    }

    length = length - 1
    const op1 = (length === increasing)
    const op2 = (length === decreasing)
    return op1 || op2
};